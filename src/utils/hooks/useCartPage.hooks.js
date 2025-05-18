// src/utils/hooks/homePage.hooks.js

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  retrieveCartDetails,
  CreateOrderDetails,
  DeleteCartDetails,
  VerifyOrderDetails,
} from "../../store/slices/homeSlices";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { Form } from "antd";

import {
  get_india_state,
  getTotalAmountWithShipping,
  getTotalAmount,
  getShipping,
} from "../../utils/helpers";

function useCartsHook() {
  const router_nav = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { carts, loading } = useSelector((state) => state.home_slice);

  const shipping = getShipping(carts);
  const total_amount = getTotalAmount(carts);
  const total_amount_with_shipping = getTotalAmountWithShipping(carts);
  useEffect(() => {
    dispatch(retrieveCartDetails(localStorage.getItem("session_id")));
  }, []);

  useEffect(() => {
    // Optional: log Razorpay readiness
    if (window.Razorpay) {
      console.log("Razorpay SDK loaded");
    }
  }, []);

  async function delete_cart_items(id) {
    await dispatch(DeleteCartDetails(id));
    dispatch(retrieveCartDetails(localStorage.getItem("session_id")));

    toast.success("Cart item deleted successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  async function onSubmitShipping(values) {
    try {
      const res = await dispatch(
        CreateOrderDetails({
          total_amount: total_amount_with_shipping,
        })
      ).unwrap();

      if (typeof window === "undefined" || !window.Razorpay) {
        return alert(
          "Razorpay not loaded. Please try again in a supported browser."
        );
      }

      const options = {
        key: "rzp_test_Km5OVlijd2UP0P",
        amount: res?.razorpay_order?.amount,
        currency: "INR",
        name: "Joyful Surprises",
        order_id: res?.razorpay_order?.id,
        customer: {
          contact: "9966558383",
          email: "support@joyfulsurprises.in",
        },
        handler: async function (response) {
          try {
            await dispatch(
              VerifyOrderDetails({
                ...values,
                payment_id: response.razorpay_payment_id,
                shipping_fee: shipping,
                total_amount: total_amount_with_shipping,
                session_id: localStorage.getItem("session_id"),
              })
            ).unwrap();

            form.resetFields();
            toast.success("Payment created successfully");
            router_nav(`/confirmation/${response?.razorpay_order_id}`);
          } catch (err) {
            toast.error(err?.message || "Payment verification failed");
          }
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error("Order creation failed:", err);
      toast.error(err?.message || "Order creation failed");
    }
  }

  return {
    carts,
    delete_cart_items,
    loading,
    router_nav,
    form,
    onSubmitShipping,
    total_amount,
    shipping,
  };
}

export default useCartsHook;
