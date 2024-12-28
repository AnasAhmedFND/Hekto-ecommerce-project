import { configureStore } from '@reduxjs/toolkit'
import reducer, { cartSlice } from './Components/slice/cartSlice'
import { wishSlice } from './Components/slice/wishSlice'

export default configureStore({
  reducer: {
    cartItmeSlice:cartSlice.reducer,
    wishItemSlice:wishSlice.reducer


  }
})