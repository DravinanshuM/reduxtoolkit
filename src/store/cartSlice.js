/* Basically here we store our data in small pieces. */
import { createSlice } from '@reduxjs/toolkit';

// 1. create initialState.
const initialState =[];


// 2. create silce.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` is an object in Redux Toolkit. With the help of reducers, we can specify how to mutate our state. Reducer functions inside this object are pure functions ex: add(), remove() etc., meaning they have no side effects and do not change data outside of their scope.
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            const index = state.filter((item)=> item.id !== action.payload);
            if(index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

// 3. export reducers object inside functions and cartSlice also.
export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer; 

