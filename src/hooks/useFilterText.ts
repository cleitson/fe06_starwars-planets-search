import { useContext, useMemo, useState } from 'react';
import FetchContext from '../context/FetchContext';
import { FetchType } from '../types';

function useFilterText() {
  const { fetchData } = useContext(FetchContext);
  const [inputSearch, setInputSearch] = useState('');
  const [filteredData, setFilteredData] = useState<FetchType[]>([]);

  const valueLower = inputSearch.toLowerCase();

  const filterData = () => {
    const filtered = fetchData.filter((item: FetchType) => item.name
      .toLowerCase().includes(valueLower));
    setFilteredData(filtered);
  };
  useMemo(() => filterData(), [inputSearch]);
  return {
    inputSearch,
    setInputSearch,
    filteredData,
    setFilteredData,
  };
}

export default useFilterText;
