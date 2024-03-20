import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const savedSearchRequest = localStorage.getItem('searchRequest');
const savedLimitRequest = localStorage.getItem('selectedLimit');

const initialState = {
  searchValue: savedSearchRequest || '',
  searchRequest: savedSearchRequest || '',
  selectedLimit: savedLimitRequest || '10',
  savedLimitRequest: savedLimitRequest,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchRequest: (state, action: PayloadAction<string>) => {
      state.searchRequest = action.payload;
    },
    setSelectedLimit: (state, action: PayloadAction<string>) => {
      state.selectedLimit = action.payload;
    },
  },
});

export const selectValues = (state: RootState) => state.searchSlice;
export const { setSearchValue, setSearchRequest, setSelectedLimit } =
  searchSlice.actions;

export default searchSlice.reducer;
