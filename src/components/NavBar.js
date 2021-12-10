import { Link, Outlet } from 'react-router-dom';
// Outlet va en el componente padre de la ruta anidada. Cada que hay rutas anidadas, va el outlet
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/countries">
            WikiCountries
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
