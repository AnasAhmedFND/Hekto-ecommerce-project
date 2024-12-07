import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'curtItmeSlice',
  initialState: {
    cartItem: []
  },
  reducers: {
    addToCart: (state, action) => {
        console.log(action);
        
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment } = cartSlice.actions

export default cartSlice.reducer