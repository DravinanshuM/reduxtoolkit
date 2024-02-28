import  { configureStore } from  '@reduxjs/toolkit';

// import cartSlice.
import cartSlice from './cartSlice';

// import productSlice.
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
    },
})


export default store;