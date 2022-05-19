import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
  },
  reducers: {
      setProductList: (state, action) => {
          state.list = action.payload;
      }
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;

export const fetchAllProduct = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/product")
    .then((response) => {
        dispatch(setProductList(response.data));
    })
    .catch((error) => console.log(error, "Slices error"));
};
