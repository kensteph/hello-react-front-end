import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: null,
  status: 'idle',
  error: null,
};

export const getGreetingsFromAPI = createAsyncThunk(
  'greetings/getGreetingsFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        'http://localhost:3000/greetings',
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetingsFromAPI.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getGreetingsFromAPI.fulfilled, (state, { payload }) => ({
        ...state,
        current_user: payload,
        status: 'succeed',
        error: null,
      }))
      .addCase(getGreetingsFromAPI.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        status: 'failed',
      }));
  },
});

export default greetingsSlice.reducer;
