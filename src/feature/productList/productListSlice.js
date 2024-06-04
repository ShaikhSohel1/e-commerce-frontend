import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllProduct } from './productListAPI'

export const fetchAllProductAsync  = createAsyncThunk('product/fetchAllProduct', async()=>{
  const response = await fetchAllProduct();
  console.log(response)
  console.log(response.data)
  return response;
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: 'idle',
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
  
  },

  extraReducers : (builder) =>{
    builder.addCase(fetchAllProductAsync.pending, (state)=>{
      state.status = 'loading';
    })
    .addCase(fetchAllProductAsync.fulfilled, (state, action)=>{
      state.status = 'idle';
      state.products = action.payload;
  })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export const selecttAllProducts = (state) => state.product.products;

export default productSlice.reducer