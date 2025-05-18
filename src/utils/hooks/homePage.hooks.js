// src/utils/hooks/homePage.hooks.js
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  retrieveBanners,
  retrieveBestSelling,
  retrieveTrending,
  retrieveReviewsAll,
  AddProductCarts,
} from "../../store/slices/homeSlices";
import { getCartFromLocalStorage, getOrCreateSessionId } from "../helpers";

const useHomePageHook = () => {
  const dispatch = useDispatch();
  const { banner_list, best_selling, trending, reviews_all, carts } =
    useSelector((state) => state.home_slice);

  useEffect(() => {
    getOrCreateSessionId();
    dispatch(retrieveBanners());
    dispatch(retrieveBestSelling("best selling"));
    dispatch(retrieveTrending("trending"));
    dispatch(retrieveReviewsAll());

    const carts_data = getCartFromLocalStorage("carts");
    dispatch(AddProductCarts(carts_data));
  }, [dispatch]);

  return {
    banner_list,
    best_selling,
    trending,
    reviews_all,
    dispatch,
  };
};

export default useHomePageHook;
