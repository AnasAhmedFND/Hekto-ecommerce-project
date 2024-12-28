import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const wishSlice = createSlice({
  name:'wishItemSlice',
  initialState:{
    wishItem:localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : []
  },
  reducers:{
    addToWish:(state, action) => {
      let findProducts = state.wishItem.findIndex((item) => item.id == action.payload.id)

      if(findProducts === -1){
        state.wishItem.push(action.payload);
        localStorage.setItem('wish', JSON.stringify(state.wishItem))

      }else{
        state.wishItem[findProducts].qty +=1;
        localStorage.setItem('wish', JSON.stringify(state.wishItem))
      }
    },
    deleteWishItem:(state, action) => {
      state.wishItem.splice(action.payload, 1);
      localStorage.setItem('wish', JSON.stringify(state.wishItem))
    }
  }
})
  
export const {addToWish, deleteWishItem} = wishSlice.actions
export default wishSlice.reducer
