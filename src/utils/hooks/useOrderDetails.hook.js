import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetOrderDetails, update_loader } from "../../store/slices/homeSlices";
import { useNavigate, useParams } from "react-router-dom";

function useOrderDetailsHook() {
  const router_nav = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { order_details, loading } = useSelector((state) => state.home_slice);
  const order_id = params?.order_id;
  useEffect(() => {
    dispatch(GetOrderDetails(order_id));
  }, [order_id]);

  function update_loader_state(value) {
    dispatch(update_loader(value));
  }

  return {
    order_details,
    loading,
    router_nav,
    update_loader_state,
  };
}

export default useOrderDetailsHook;
