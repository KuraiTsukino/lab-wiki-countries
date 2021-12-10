import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react'

const CountriesList = (props) => {
  // En router se importa la data, se pasa por la ruta y aquí se usa props
  const { allCountries } = props;
  // El .map sirve para recorrer un arreglo y devuelve uno nuevo con el mismo largo que el original y se puede modificar los datos que se quieren mostrar
  // Mensaje del input guardado en un estado local
  const [searchValue, setSearchValue] = useState('')
  // Hay que modificar el setSearchValue, hay que llamar al método

  // Función para detectar cambios en el input. Para manipular el input. Se activa cada que se detecta un cambio en el search bar, 
  function handleChange(event){
    event.preventDefault()
    //console.log(event.target.value);
    setSearchValue(event.target.value)
    //console.log(searchValue) ya recibe la información con el estado local.
  }
  // Hay que hacer un filtrado de la información.
  // UseState. La información que tiene nuestro elemento en un momento.
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <input onChange={(e) => handleChange(e)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <div class="list-group">
            {allCountries.filter(elementoF => {// devuelve un arreglo y se puede iterar con .map. Se filtra si el elementoF es igual a un string vacío
              if (searchValue === ''){
                return elementoF
              } else if(elementoF.name.common.toLowerCase().includes(searchValue.toLowerCase())){
                return elementoF
              }
            }).map((elemento, i) => {
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
