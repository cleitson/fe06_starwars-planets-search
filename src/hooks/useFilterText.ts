import { useContext, useMemo, useState } from 'react';
import FetchContext from '../context/FetchContext';
import { FetchType } from '../types';

function useFilterText() {
  const data = useContext(FetchContext);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState<FetchType[]>([]);

  const valueLower = value.toLowerCase();

  const filterData = () => {
    const filtered = data.filter((item: any) => item.name
      .toLowerCase().includes(valueLower));
    setFilteredData(filtered);
  };
  useMemo(() => filterData(), [value]);
  return {
    value,
    setValue,
    filteredData,
    setFilteredData,
  };
}

export default useFilterText;
