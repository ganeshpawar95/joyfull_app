import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retrieveProductByCategory } from "../../store/slices/homeSlices";
import { useParams } from "react-router-dom";

const useCategoryHook = () => {
  const { slug } = useParams(); // 👈 Get the slug

  const dispatch = useDispatch();
  const { loading, category_product } = useSelector(
    (state) => state.home_slice
  );

  useEffect(() => {
    if (slug != undefined) {
      dispatch(retrieveProductByCategory(slug));
    }
  }, [slug]);

  return {
    loading,
    category_product,
    dispatch,
    slug,
  };
};

export default useCategoryHook;
