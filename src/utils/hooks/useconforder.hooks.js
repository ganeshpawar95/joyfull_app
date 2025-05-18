// src/utils/hooks/homePage.hooks.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
import { useNavigate, useParams } from "react-router-dom";

const useOrderConfirmationsPageHook = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const router_nav = useNavigate();
  const order_id = params?.order_id;

  useEffect(() => {
    const timeout = setTimeout(() => {
      router_nav(`/order-tracking/${order_id}`); // change to your desired route
    }, 10000); // 10 seconds

    return () => clearTimeout(timeout); // cleanup on unmount
  }, [router_nav]);

  return {
    order_id,
  };
};

export default useOrderConfirmationsPageHook;
