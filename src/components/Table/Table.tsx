import { useContext, useState } from 'react';
import FetchContext from '../../context/FetchContext';
import { FetchType, InputFilterType } from '../../types';
import useFilterText from '../../hooks/useFilterText';
import useInputFilter from '../../hooks/useInputFilter';

const initialFilter: InputFilterType = {
  select: 'population',
  option: 'maior que',
  numberValue: 0,
};

function Table() {
  const data = useContext(FetchContext);
  const [inputFilter, setInputFilter] = useState<InputFilterType>(initialFilter);

  const { filteredData, setInputSearch, inputSearch } = useFilterText();
  const { selectFilter, setSelectFilter, selectData } = useInputFilter();

  const listafinal = () => {
    if (inputSearch.length > 0) {
      return filteredData;
    } if (selectFilter.length > 0) {
      return selectData;
    }
    return data;
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
  const handleClick = () => {
    setSelectFilter([...selectFilter, inputFilter]);
  };
  // console.log(inputFilter);

  return (
    <div>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome do planeta"
          value={ inputSearch }
          onChange={ (e) => setInputSearch(e.target.value) }
        />
      </div>
      <div>
        <select
          name="select"
          id="select"
          data-testid="column-filter"
          value={ inputFilter.select }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
        <button
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
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
