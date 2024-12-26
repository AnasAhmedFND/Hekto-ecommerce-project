import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'WishItmeSlice', 
  initialState: {
    wishItems: localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : []
  },
  reducers: {
    addToWish: (state, action) => {            
      let findProducts = state.wishItems.findIndex((item)=>item.id == action.payload.id)

      if(findProducts === -1){
        state.wishItems.push(action.payload);
        localStorage.setItem("wish", JSON.stringify(state.wishItems))
      }else{
       state.wishItems[findProducts].qty += 1;
       localStorage.setItem("wish", JSON.stringify(state.wishItems))
      }
     
                     
    }
     
   

  }
})

// Action creators are generated for each case reducer function
export const { addToWish } = cartSlice.actions

export default wishSlice.reducer