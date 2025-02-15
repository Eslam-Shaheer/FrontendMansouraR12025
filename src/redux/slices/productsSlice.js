import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get("/products");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Error from thunk ");
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/getSingle",
  async (id, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Error from thunk ");
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (product, thunkApi) => {
    try {
      const response = await axiosInstance.post("/products", product);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Error from thunk ");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async (product, thunkApi) => {
    try {
      const response = await axiosInstance.patch(
        `/products/${product.id}`,
        product
      );
      return response.data;
    } catch (error) {}
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
