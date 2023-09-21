import { useContext, useState } from 'react';
import FetchContext from '../../context/FetchContext';
import { FetchType, InputFilterType } from '../../types';
import useFilterText from '../../hooks/useFilterText';
import useInputFilter from '../../hooks/useInputFilter';

function Table() {
  const { selectData } = useInputFilter();
  const {
    fetchData,
    setSelectFilter,
    selectFilter,
    selectValues,
    setSelectValues,
  } = useContext(FetchContext);

  const { filteredData, setInputSearch, inputSearch } = useFilterText();

  const initialFilter: InputFilterType = {
    select: selectValues[0] as InputFilterType['select'],
    option: 'maior que',
    numberValue: 0,
  };

  const [inputFilter, setInputFilter] = useState<InputFilterType>(initialFilter);

  const listafinal = () => {
    if (inputSearch.length > 0) {
      return filteredData;
    } if (selectFilter.length > 0) {
      return selectData;
    }
    return fetchData;
  };
  const finalData = listafinal();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputFilter({
      ...inputFilter,
      [name]: value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectFilter([...selectFilter, inputFilter]);
    setInputFilter(initialFilter);
  };

  const removeFilter = (select: InputFilterType['select']) => {
    const newFilter = selectFilter.filter((item) => item.select !== select);
    setSelectFilter(newFilter);
    setSelectValues([...selectValues, select]);
    console.log(newFilter);
  };

  return (
    <div>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          id="search"
          placeholder="Buscar por planeta"
          value={ inputSearch }
          onChange={ (e) => setInputSearch(e.target.value) }
        />
      </div>
      <form onSubmit={ handleSubmit }>
        <select
          name="select"
          id="select"
          data-testid="column-filter"
          value={ inputFilter.select }
          onChange={ handleChange }
        >
          {selectValues.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
        <select
          name="option"
          id="option"
          data-testid="comparison-filter"
          value={ inputFilter.option }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="numberValue"
          type="number"
          data-testid="value-filter"
          value={ inputFilter.numberValue }
          onChange={ handleChange }
        />
        <button data-testid="button-filter" type="submit">
          Filtrar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setSelectFilter([]) }
        >
          Limpar filtro
        </button>
      </form>
      <div>
        {selectFilter.map((item) => (
          <p key={ item.select } data-testid="filter">
            {`${item.select} ${item.option} ${item.numberValue}`}
            <label htmlFor="btnDel">
              <button
                id="btnDel"
                onClick={ () => removeFilter(item.select) }
              >
                X
              </button>
            </label>
          </p>

        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {finalData?.map((item: FetchType) => {
            const {
              name,
              climate,
              created,
              diameter,
              edited,
              films,
              gravity,
              population,
              terrain,
              url,
            } = item;
            return (
              <tr key={ name }>
                <td>{name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{item.surface_water}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
