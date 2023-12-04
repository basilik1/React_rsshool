import { createContext } from 'react';
import { IDataContext } from '../interface/interface';

export const DataContext = createContext<IDataContext>({
  searchRequest: '',
  infoData: [],
});
