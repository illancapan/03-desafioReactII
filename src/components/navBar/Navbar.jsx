import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "nav-link active text-danger" : "nav-link text-white");

  return (
    <nav className="navbar navbar-expand-lg text-bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img className="w-25" src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
        
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item px-3">
          <NavLink exact={true.toString()} to="/" className={setActiveClass}>
            Home
          </NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to="/buscador" className={setActiveClass}>
            Buscador
          </NavLink>
        </li>
        {/* <li className="nav-item px-3">
          <NavLink to="/pokemon" className={setActiveClass}>
            Pokemon
          </NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default NavBar;