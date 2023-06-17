import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: null,
  isLoading: false,
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
});


export default greetingsSlice.reducer;
