import { useEffect, useMemo, useState } from 'react';
import { FetchType, InputFilterType } from '../types';
import FetchContext from './FetchContext';
import { fecthApi } from '../api';

type FetchProviderProps = {
  children: React.ReactNode
};

function FetchProvider({ children }: FetchProviderProps) {
  const values = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [data, setData] = useState<FetchType[]>([]);
  const [selectFilter, setSelectFilter] = useState<InputFilterType[]>([]);
  const [selectValues, setSelectValues] = useState<string[]>(values);

  const valuesRemove = () => {
    let newValues = selectValues;
    selectFilter.forEach((filter) => {
      const { select } = filter;
      newValues = selectValues.filter((value) => value !== select);
      setSelectValues(newValues);
    });
  };
  useMemo(() => {
    valuesRemove();
  }, [selectFilter]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fecthApi();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <FetchContext.Provider
      value={ {
        fetchData: data,
        selectFilter,
        setSelectFilter,
        selectValues,
        setSelectValues } }
    >
      <div>
        {children}
      </div>
    </FetchContext.Provider>
  );
}

export default FetchProvider;
