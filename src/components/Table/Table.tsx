import { useContext } from 'react';
import FetchContext from '../../context/FetchContext';
import { FetchType } from '../../types';

function Table() {
  const data = useContext(FetchContext);
  console.log(data);
  return (
    <div>
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
          {data?.map((item: FetchType) => {
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