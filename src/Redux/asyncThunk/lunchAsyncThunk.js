import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTE } from "../constant/reduxConstant";
import {
  getAllLunchService,
  getLatestLaouchService,
  getLaunchedDetailByIdService,
  getNextLaouchService,
  getPastLunchService,
  getUpcomingLunchService,
} from "../Services/Lanuch.service";
// all lanuch
export const getAllLunchAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.ALL_LUNCHES,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getAllLunchService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// upcoming launch async thunk
export const getUpcomingAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.UPCOMING_LUNCH,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getUpcomingLunchService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//past Launch async thunk
export const getPastAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.PAST_LUNCH,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPastLunchService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//launch getDetails by id thunk
export const getLaunchedDetailById = createAsyncThunk(
  ASYNC_ROUTE.GET_DETAIL_BY_ID,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getLaunchedDetailByIdService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// getLatest launch async thunk
export const getLatestLauchThunk = createAsyncThunk(
  ASYNC_ROUTE.LATEST_LUNCH,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getLatestLaouchService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// getNext launch async thunk

export const getNextLaouchThunk = createAsyncThunk(
  ASYNC_ROUTE.NEXT_LUNCH,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getNextLaouchService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
