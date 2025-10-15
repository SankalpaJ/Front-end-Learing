import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Gamana",
    balance: 250000,
  },
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    removeMoney: (state, action) => {
      state.balance -= action.payload;
    }
  },
});
export const { addMoney, removeMoney } = userSlice.actions;
const store = configureStore({
  reducer: { user: userSlice.reducer },
});
export default store;