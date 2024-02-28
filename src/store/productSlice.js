// 1. import createSlice from toolkit.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// enum create for status, you ensure that the properties cannot be modified later in the code,
export const STATUSES = Object.freeze({
    IDEL: 'idel',
    ERROR: 'error',
    LOADING: 'loading'
})

// 2. create slice.
const productSlice = createSlice({
   name: 'product',
   initialState: {
        data: [],
        status: STATUSES.IDEL
   },
    reducers: {
        // setProduct(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state, action) =>{
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = STATUSES.IDEL;
        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            state.status = STATUSES.ERROR;
        })
    },
});

// 3.export.
export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thuaks middleware create, it is anormal functions.
export const fetchProduct = createAsyncThunk('products/fetch', async ()=>{
   const res = await fetch(`https://fakestoreapi.com/products`);
   const data = await res.json();
   return data;
});


        //   OR
// export function fetchProduct () {
//     return async function fetchProductThunk (dispatch, getStatus) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch(`https://fakestoreapi.com/products`);
//             const data = await res.json();
//             dispatch(setProduct(data));
//             dispatch(setStatus(STATUSES.IDEL));
//         } catch (error) {
//             console.log("ERROR :: ", error.message);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }