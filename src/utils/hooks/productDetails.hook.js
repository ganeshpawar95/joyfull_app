import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  retrieveProductDetails,
  AddProductCarts,
  CreateProductDetails,
} from "../../store/slices/homeSlices";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "antd";
import { ToastContainer, toast } from "react-toastify";
import {
  getCartFromLocalStorage,
  transformCertificateData,
  getOrCreateSessionId,
} from "../helpers";
import { useMediaQuery } from "react-responsive";

function useProductDetailsHook() {
  const [isCart, setisCart] = useState("cart"); // "cart" or "buy"

  const router_nav = useNavigate();
  const dispatch = useDispatch();
  const router = useParams();
  const [form] = Form.useForm();
  const { product_details, carts, loading } = useSelector(
    (state) => state.home_slice
  );
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(retrieveProductDetails(router.id));
  }, [dispatch]);

  useEffect(() => {
    const carts_data = getCartFromLocalStorage("carts");
    dispatch(AddProductCarts(carts_data));
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  function add_to_cart(product) {
    const session_id = getOrCreateSessionId();
    transformCertificateData(product.user_data, product_details, (output) => {
      dispatch(
        CreateProductDetails({
          ...output,
          product_id: product.id,
          session_id: session_id,
        })
      )
        .unwrap()
        .then((res) => {
          form.resetFields();
          if (isCart == "cart") {
            toast.success("Product added successfully in cart", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            router_nav("/cart");
          } else {
            router_nav("/checkout");
          }
        })
        .catch((e) => {
          toast.error(e, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    });
  }

  return {
    product_details,
    add_to_cart,
    form,
    isExpanded,
    setIsExpanded,
    isMobile,
    setisCart,
    loading,
  };
}

export default useProductDetailsHook;
