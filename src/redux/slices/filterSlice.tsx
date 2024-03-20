import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  items: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const filter = (state: RootState) => state.filterSlice;
export const { setItems } = filterSlice.actions;
export default filterSlice.reducer;
