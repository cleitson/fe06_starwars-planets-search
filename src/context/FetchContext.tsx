import { createContext } from 'react';
import { FetchType } from '../types';

const FetchContext = createContext({} as FetchType[]);

export default FetchContext;
