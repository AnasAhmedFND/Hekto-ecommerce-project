import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartItmeSlice', 
  initialState: {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addToCart: (state, action) => {
            
      let findProducts = state.cartItems.findIndex((item) => item.id === action.payload.id)

     if(findProducts === -1){
       state.cartItems.push(action.payload);
       localStorage.setItem("cart", JSON.stringify(state.cartItems))
     }else{
      state.cartItems[findProducts].qty += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
     }                  
    },
    increment: (state, action) => {       
      state.cartItems[action.payload].qty += 1;  
      localStorage.setItem("cart", JSON.stringify(state.cartItems))       
      
    },
    dicrement: (state, action) => {
      state.cartItems[action.payload].qty -= 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    }

  }
})

// Action creators are generated for each case reducer function
export const { addToCart, increment, dicrement } = cartSlice.actions

export default cartSlice.reducer