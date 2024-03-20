import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';
import { Status } from '../interface/interface';

type TSlice = {
  searchTerm: string;
};
type TData = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  url: string;
};

export const fetchAllPage = createAsyncThunk<TData[], TSlice>(
  'pizza/fetchPageStatus',
  async (params) => {
    const { searchTerm } = params;
    let result: [] = [];

    const getItems = async (url: string) => {
      const { data } = await axios.get<TData[]>(url);
      result = [...result, ...data.results];
      if (data.next !== null) {
        await getItems(data.next);
      }
    };
    await getItems(`https://swapi.dev/api/people/${searchTerm}`);
    console.log(result);
    return result;
  }
);

const initialState = {
  fetchData: [],
  status: Status.LOADING,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.fetchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPage.pending, (state) => {
        state.fetchData = [];
        state.status = Status.LOADING;
      })
      .addCase(
        fetchAllPage.fulfilled,
        (state, action: PayloadAction<TData[]>) => {
          state.fetchData = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchAllPage.rejected, (state) => {
        state.fetchData = [];
        state.status = Status.ERROR;
      });
  },
});

export const selectCardData = (state: RootState) => state.cardSlice;
export default cardSlice.reducer;
export const { setData } = cardSlice.actions;
