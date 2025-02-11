import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find((product) => product.id === action.payload.id);

      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
      state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
      state.tax = state.totalPrice * state.taxRate;
      state.grandTotal = state.totalPrice + state.tax;
    },

    decreaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter((p) => p.id !== action.payload);
        }
      }

      state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
      state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
      state.tax = state.totalPrice * state.taxRate;
      state.grandTotal = state.totalPrice + state.tax;
    },
  },
});

export const { addToCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
