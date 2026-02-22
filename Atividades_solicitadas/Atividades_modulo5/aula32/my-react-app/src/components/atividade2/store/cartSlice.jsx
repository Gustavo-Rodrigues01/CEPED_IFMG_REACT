import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    ADD_ITEM: (state, action) => {
      state.items.push(action.payload);
    },
    REMOVE_ITEM: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { ADD_ITEM, REMOVE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;