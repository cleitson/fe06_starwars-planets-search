import { useContext, useMemo, useState } from 'react';
import FetchContext from '../context/FetchContext';
import { InputFilterType, FetchType } from '../types';

function useInputFilter() {
  const data = useContext(FetchContext);
  const [selectFilter, setSelectFilter] = useState<InputFilterType[]>([]);
  const [selectData, setSelectData] = useState<FetchType[]>([]);

  const applyFilters = () => {
    let filteredData = data;

    selectFilter.forEach((filter) => {
      const { select, option, numberValue } = filter;

      filteredData = filteredData.filter((planet) => {
        const planetValue = Number(planet[select]);

        if (option === 'maior que') {
          return planetValue > Number(numberValue);
        }
        if (option === 'menor que') {
          return planetValue < Number(numberValue);
        }
        if (option === 'igual a') {
          return planetValue === Number(numberValue);
        }
        return false;
      });
    });

    setSelectData(filteredData);
  };

  console.log(selectData);

  useMemo(() => applyFilters(), [selectFilter]);
  return {
    selectFilter,
    setSelectFilter,
    selectData,
  };
}

export default useInputFilter;
