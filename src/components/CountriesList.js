import { Link, Outlet } from 'react-router-dom';

const CountriesList = (props) => {
  // En router se importa la data, se pasa por la ruta y aquí se usa props
  const { allCountries } = props;
  // El .map sirve para recorrer un arreglo y devuelve uno nuevo con el mismo largo que el original y se puede modificar los datos que se quieren mostrar
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div class="list-group">
            {allCountries.map((elemento, i) => {
              return (
                <Link
                  key={i}
                  className="list-group-item list-group-item-action"
                  to={`/countries/${elemento.cca3}`}
                >{`${elemento.flag} ${elemento.name.common}`}</Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CountriesList;
