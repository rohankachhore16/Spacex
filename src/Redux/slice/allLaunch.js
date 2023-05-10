import { createSlice } from "@reduxjs/toolkit";
import {
  getAllLunchAsyncThunk,
  getLatestLauchThunk,
  getNextLaouchThunk,
  getPastAsyncThunk,
  getUpcomingAsyncThunk,
} from "../asyncThunk/lunchAsyncThunk";
import { THUNK_STATUS } from "../constant/reduxConstant";

const initialState = {
  launchData: [],
  modalData: [],
  loading: false,
  status: {
    all_launch: null,
    modal_lanuch: null,
    upcoming_lanuch: null,
    past_lanuch: null,
    latest_lanuch: null,
    next_lanuch: null,
  },
};
export const allLunch = createSlice({
  name: "lunch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // all lanuch
    builder.addCase(getAllLunchAsyncThunk.pending, (state, action) => {
      state.status.all_launch = THUNK_STATUS.LOADING;
    });
    builder.addCase(getAllLunchAsyncThunk.fulfilled, (state, action) => {
      state.status.all_launch = THUNK_STATUS.SUCCESS;
      // console.log(action)
      state.launchData = action?.payload?.data;
    });
    builder.addCase(getAllLunchAsyncThunk.rejected, (state, action) => {
      state.status.all_launch = THUNK_STATUS.FAILED;
    });

  

    // upcoming slice

    builder.addCase(getUpcomingAsyncThunk.pending, (state, action) => {
      state.status.upcoming_lanuch = THUNK_STATUS.LOADING;
    });
    builder.addCase(getUpcomingAsyncThunk.fulfilled, (state, action) => {
      state.status.upcoming_lanuch = THUNK_STATUS.SUCCESS;
      state.launchData = action?.payload?.data;
      // console.log(action)
    });
    builder.addCase(getUpcomingAsyncThunk.rejected, (state, action) => {
      state.status.upcoming_lanuch = THUNK_STATUS.FAILED;
    });
    //past slice
    builder.addCase(getPastAsyncThunk.pending, (state, action) => {
      state.status.past_lanuch = THUNK_STATUS.LOADING;
    });
    builder.addCase(getPastAsyncThunk.fulfilled, (state, action) => {
      state.status.past_lanuch = THUNK_STATUS.SUCCESS;
      state.launchData = action?.payload?.data;
      // console.log(action)
    });
    builder.addCase(getPastAsyncThunk.rejected, (state, action) => {
      state.status.past_lanuch = THUNK_STATUS.FAILED;
    });

    // Latest Laounch

    builder.addCase(getLatestLauchThunk.pending, (state, action) => {
      state.status.latest_lanuch = THUNK_STATUS.LOADING;
    });
    builder.addCase(getLatestLauchThunk.fulfilled, (state, action) => {
      state.status.latest_lanuch = THUNK_STATUS.SUCCESS;
      state.launchData = action?.payload?.data;
      // console.log(action)
    });
    builder.addCase(getLatestLauchThunk.rejected, (state, action) => {
      state.status.latest_lanuch = THUNK_STATUS.FAILED;
    });

    // Next Slice Handler

    builder.addCase(getNextLaouchThunk.pending, (state, action) => {
      state.status.next_lanuch = THUNK_STATUS.LOADING;
    });
    builder.addCase(getNextLaouchThunk.fulfilled, (state, action) => {
      state.status.next_lanuch = THUNK_STATUS.SUCCESS;
      state.launchData = [action?.payload?.data];
      // console.log(action)
    });
    builder.addCase(getNextLaouchThunk.rejected, (state, action) => {
      state.status.next_lanuch = THUNK_STATUS.FAILED;
    });
  },
});
export const allLunchState = (state) => state.allLunchState;
export default allLunch.reducer;
