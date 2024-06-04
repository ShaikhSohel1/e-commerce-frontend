import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../feature/counter/counterSlice'
import productReducer from '../feature/productList/productListSlice'

export default configureStore({
  reducer: {
    product: productReducer,
  }
})