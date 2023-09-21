import { useContext, useMemo, useState } from 'react';
import FetchContext from '../context/FetchContext';
import { FetchType, SelectValueType } from '../types';

function useInputFilter() {
  const { fetchData, selectFilter } = useContext(FetchContext);
  const [selectData, setSelectData] = useState<FetchType[]>([]);

  const applyFilters = () => {
    let filteredData = fetchData;

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

  // console.log(selectFilter);

  useMemo(
    () => applyFilters(),
    [selectFilter],
  );
  return {
    selectData,
  };
}

export default useInputFilter;
