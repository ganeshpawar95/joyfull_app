import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HttpRequests from "../../services/Http-request-service";
import { saveCartToLocalStorage } from "../../utils/helpers";

const initialState = {
  loading: true,
  hasErrors: true,
  banner_list: [],
  best_selling: [],
  trending: [],
  reviews_all: [],
  product_details: null,
  order_details: null,
  carts: [],
  category_product: [],
  search_name: "",
};

export const retrieveBanners = createAsyncThunk(
  "home-retrieve-banners",
  async (yrs, { getState }) => {
    const state = getState();
    const {} = state.home_slice;
    const res = await HttpRequests.get(`home/banners/list/`);
    return res.data;
  }
);

export const retrieveBestSelling = createAsyncThunk(
  "home-retrieve-best-selling",
  async (product_type, { getState }) => {
    const state = getState();
    const { search_name } = state.home_slice;
    const res = await HttpRequests.get(
      `home/products/list/?product_type=${product_type}&search_name=${search_name}`
    );
    return res.data;
  }
);

export const retrieveTrending = createAsyncThunk(
  "home-retrieve-best-trending",
  async (product_type, { getState }) => {
    const state = getState();
    const { search_name } = state.home_slice;
    const res = await HttpRequests.get(
      `home/products/list/?product_type=${product_type}&search_name=${search_name}`
    );
    return res.data;
  }
);

export const retrieveReviewsAll = createAsyncThunk(
  "home-retrieve-review-all",
  async () => {
    const res = await HttpRequests.get(`home/products/reviews/all/`);
    return res.data;
  }
);

export const retrieveProductDetails = createAsyncThunk(
  "home-retrieve-product-details",
  async (product_id) => {
    const res = await HttpRequests.get(
      `home/products/details/?product_id=${product_id}`
    );
    return res.data;
  }
);

export const CreateProductDetails = createAsyncThunk(
  "create-retrieve-product-details",
  async (data) => {
    const res = await HttpRequests.create(`home/product/add_to_cart/`, data);
    return res.data;
  }
);

export const retrieveCartDetails = createAsyncThunk(
  "cart-retrieve-list-details",
  async (session_id) => {
    const res = await HttpRequests.get(
      `home/product/cart_details/${session_id}`
    );
    return res.data;
  }
);

export const DeleteCartDetails = createAsyncThunk(
  "cart-delete-list-details",
  async (cart_id) => {
    const res = await HttpRequests.remove(
      `home/product/delete_cart/${cart_id}`
    );
    return res.data;
  }
);

export const CreateOrderDetails = createAsyncThunk(
  "create-orders-detailssss",
  async (total_amount) => {
    const res = await HttpRequests.create(
      `home/product/create/order/?total_amount=${total_amount.total_amount}`,
      total_amount
    );
    return res.data;
  }
);

export const VerifyOrderDetails = createAsyncThunk(
  "verify-order-details",
  async (data) => {
    const res = await HttpRequests.create(
      `home/product/verify/order/?session_id=${data.session_id}`,
      data
    );
    return res.data;
  }
);

export const GetOrderDetails = createAsyncThunk(
  "get-order-details",
  async (order_id) => {
    const res = await HttpRequests.get(
      `home/product/order/details/${order_id}`
    );
    return res.data;
  }
);

// category
export const retrieveProductByCategory = createAsyncThunk(
  "home-retrieve-product_by_category",
  async (product_type, { getState }) => {
    const state = getState();
    const { search_name } = state.home_slice;
    const res = await HttpRequests.get(
      `home/products/list/?product_type=${product_type}&search_name=${search_name}`
    );
    return res.data;
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    // retrieveProductByCategory
    builder.addCase(retrieveProductByCategory.pending, (state, action) => {
      state.loading = true;
      state.category_product = [];
    });

    builder.addCase(retrieveProductByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category_product = action.payload;
    });

    builder.addCase(retrieveProductByCategory.rejected, (state, action) => {
      state.loading = false;
      state.category_product = [];
    });

    // GetOrderDetails'
    builder.addCase(GetOrderDetails.pending, (state, action) => {
      state.loading = true;
      state.order_details = null;
    });

    builder.addCase(GetOrderDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.order_details = action.payload;
    });

    builder.addCase(GetOrderDetails.rejected, (state, action) => {
      state.loading = false;
      state.order_details = null;
    });

    // VerifyOrderDetails
    builder.addCase(VerifyOrderDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(VerifyOrderDetails.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(VerifyOrderDetails.rejected, (state, action) => {
      state.loading = false;
    });

    // CreateOrderDetails
    builder.addCase(CreateOrderDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(CreateOrderDetails.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(CreateOrderDetails.rejected, (state, action) => {
      state.loading = false;
    });

    // DeleteCartDetails
    builder.addCase(DeleteCartDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(DeleteCartDetails.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(DeleteCartDetails.rejected, (state, action) => {
      state.loading = false;
    });

    // retrieveCartDetails

    builder.addCase(retrieveCartDetails.pending, (state, action) => {
      state.loading = true;
      state.carts = [];
    });

    builder.addCase(retrieveCartDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.carts = action.payload;
    });

    builder.addCase(retrieveCartDetails.rejected, (state, action) => {
      state.loading = false;
      state.carts = [];
    });

    builder.addCase(retrieveBanners.pending, (state, action) => {
      state.loading = true;
      state.banner_list = [];
    });

    builder.addCase(retrieveBanners.fulfilled, (state, action) => {
      state.loading = false;
      state.banner_list = action.payload;
    });

    builder.addCase(retrieveBanners.rejected, (state, action) => {
      state.loading = false;
      state.banner_list = [];
    });

    // retrieveBestSelling
    builder.addCase(retrieveBestSelling.pending, (state, action) => {
      state.loading = true;
      state.best_selling = [];
    });

    builder.addCase(retrieveBestSelling.fulfilled, (state, action) => {
      state.loading = false;
      state.best_selling = action.payload;
    });

    builder.addCase(retrieveBestSelling.rejected, (state, action) => {
      state.loading = false;
      state.best_selling = [];
    });
    // retrieveTrending
    builder.addCase(retrieveTrending.pending, (state, action) => {
      state.loading = true;
      state.trending = [];
    });

    builder.addCase(retrieveTrending.fulfilled, (state, action) => {
      state.loading = false;
      state.trending = action.payload;
    });

    builder.addCase(retrieveTrending.rejected, (state, action) => {
      state.loading = false;
      state.trending = [];
    });

    // retrieveReviewsAll
    builder.addCase(retrieveReviewsAll.pending, (state, action) => {
      state.loading = true;
      state.reviews_all = [];
    });

    builder.addCase(retrieveReviewsAll.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews_all = action.payload;
    });

    builder.addCase(retrieveReviewsAll.rejected, (state, action) => {
      state.loading = false;
      state.reviews_all = [];
    });

    // retrieveProductDetails
    builder.addCase(retrieveProductDetails.pending, (state, action) => {
      state.loading = true;
      state.product_details = null;
    });

    builder.addCase(retrieveProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product_details = action.payload;
    });

    builder.addCase(retrieveProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.product_details = null;
    });

    // CreateProductDetails

    builder.addCase(CreateProductDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(CreateProductDetails.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(CreateProductDetails.rejected, (state, action) => {
      state.loading = false;
    });
  },
  reducers: {
    onchange_search: (state, action) => {
      state.search_name = action.payload;
    },
    change_page: (state, action) => {
      state.current_page = action.payload;
    },

    onchange_sort_by: (state, action) => {
      state.sort_by = action.payload;
    },
    update_loader: (state, action) => {
      state.loading = action.payload;
    },

    AddProductCarts: (state, action) => {
      state.carts = action.payload;
      saveCartToLocalStorage(action.payload);
    },
  },
});

// change_page

const { reducer } = HomeSlice;
export const {
  update_loader,
  change_page,
  onchange_sort_by,
  onchange_search,
  AddProductCarts,
} = HomeSlice.actions;
export default reducer;
