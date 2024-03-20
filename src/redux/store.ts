import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardSlice from './slices/cardSlice';
import filterSlice from './slices/filterSlice';
import searchSlice from './slices/searchSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    cardSlice,
    filterSlice,
    searchSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
