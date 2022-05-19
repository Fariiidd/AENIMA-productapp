import { configureStore } from '@reduxjs/toolkit';
// REDUCER
import product from './Slices/Product/product'

export default configureStore({
    reducer: {
        product
    }
})