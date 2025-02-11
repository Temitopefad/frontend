import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import authApi from './features/auth/authApi';
import authReducer from './features/auth/authSlice';
import productApi from './features/products/productsApi';
import reviewApi from './features/reviews/reviewsApi';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer, // Fixed typo here
        [reviewApi.reducerPath]: reviewApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, 
            reviewApi.middleware),

});

export default store;
