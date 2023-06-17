import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './features/greetingsSlice';

export const store = configureStore({
  reducer: { greetings: greetingsReducer },
});
