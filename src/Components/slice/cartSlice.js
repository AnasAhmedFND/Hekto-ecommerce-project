import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartItmeSlice',
  initialState: {
    cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, action) => {

      let findProducts = state.cartItem.findIndex((item) => item.id === action.payload.id)

     if(findProducts === -1){
       state.cartItem.push(action.payload)
       localStorage.setItem('cart', JSON.stringify(state.cartItem))
     }else{
      state.cartItem[findProducts].qty += 1;
      localStorage.setItem('cart', JSON.stringify(state.cartItem))
     }
      
       
       
        
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer