import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useOrderConfirmationsPageHook = () => {
  const params = useParams();
  const router_nav = useNavigate();
  const order_id = params?.order_id;

  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router_nav(`/order-tracking/${order_id}`);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router_nav, order_id]);

  return {
    order_id,
    secondsLeft,
  };
};

export default useOrderConfirmationsPageHook;
