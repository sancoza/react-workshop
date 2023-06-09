import { Link } from 'react-router-dom';

export const Navbar = ({ location }) => {
  let headerClass = '';
  if (location !== '/') {
    headerClass = 'navbar navbar-expand-lg bg-dark';
  } else {
    headerClass = 'navbar navbar-expand-lg fixed-top';
  }
  return (
    <nav className={headerClass}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fst-italic" to="/">
          <img src="img/logo.png" alt="" width="50" /> TravelStar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" to="putovanja">
                Putovanja
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" to="dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white " to="detalji">
                Detalji
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
