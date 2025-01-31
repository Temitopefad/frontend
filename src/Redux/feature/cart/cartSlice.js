import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find(product => product.id === action.payload._id);
            if (isExist) {
                isExist.quantity += 1; // Update quantity if it exists
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
            state.selectedItems = setselectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        }
    }
});

// Utility functions
export const setselectedItems = (state) => state.products.reduce((total, product) => total + product.quantity, 0);
export const setTotalPrice = (state) => state.products.reduce((total, product) => total + (product.quantity * product.price), 0);
export const setTax = (state) => state.totalPrice * state.taxRate;

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTax(state);
}

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
