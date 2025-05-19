// src/utils/hooks/homePage.hooks.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  retrieveBanners,
  retrieveBestSelling,
  retrieveTrending,
  retrieveReviewsAll,
  retrieveCartDetails,
} from "../../store/slices/homeSlices";
import { getCartFromLocalStorage, getOrCreateSessionId } from "../helpers";

const useHomePageHook = () => {
  const dispatch = useDispatch();
  const { banner_list, best_selling, trending, reviews_all, carts, loading1 } =
    useSelector((state) => state.home_slice);

  useEffect(() => {
    getOrCreateSessionId();
    dispatch(retrieveBanners());
    dispatch(retrieveBestSelling("best selling"));
    dispatch(retrieveTrending("trending"));
    dispatch(retrieveReviewsAll());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(retrieveCartDetails(localStorage.getItem("session_id")));
    }, 5000); // 20 seconds = 20000 milliseconds
    return () => clearTimeout(timer); // clean up if component unmounts
  }, []);

  return {
    banner_list,
    best_selling,
    trending,
    reviews_all,
    dispatch,
    loading1,
  };
};

export default useHomePageHook;
