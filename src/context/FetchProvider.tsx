import { useEffect, useState } from 'react';
import { FetchType } from '../types';
import FetchContext from './FetchContext';
import { fecthApi } from '../api';

type FetchProviderProps = {
  children: React.ReactNode
};

function FetchProvider({ children }: FetchProviderProps) {
  const [data, setData] = useState<FetchType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fecthApi();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <FetchContext.Provider value={ data }>
      <div>
        {children}
      </div>
    </FetchContext.Provider>
  );
}

export default FetchProvider;
