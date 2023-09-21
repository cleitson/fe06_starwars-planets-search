import { createContext } from 'react';
import { FetchType, InputFilterType } from '../types';

type FetchProviderProps = {
  fetchData: FetchType[];
  selectFilter: InputFilterType[];
  setSelectFilter: React.Dispatch<React.SetStateAction<InputFilterType[]>>;
  selectValues: string[];
  setSelectValues: React.Dispatch<React.SetStateAction<string[]>>;
};
const FetchContext = createContext({} as FetchProviderProps);

export default FetchContext;
