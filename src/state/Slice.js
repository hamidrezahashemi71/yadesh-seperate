import {createSlice} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const CurrentUserSlice = createSlice({
  name: "yadesh",
  initialState: {
    currentUser: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      if (action.payload._id) state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = {};
      cookies.remove("ut", {path: "/"});
    },
  },
});

export const {setCurrentUser: setCurrentUser, logOut} =
  CurrentUserSlice.actions;
export const userSelect = (state) => state.reducer.currentUser;
export default CurrentUserSlice.reducer;
