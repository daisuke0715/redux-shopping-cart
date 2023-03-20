import { createSlice } from "@reduxjs/toolkit";
import cartItems from  '../../cartItems';

const initialState = {
  cartItems: [cartItems],
  amount: 4,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
