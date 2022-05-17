import "../css/nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid">
        <a className="navbar-brand nav-brand" href="#">
          My shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link nav-item-text"
                aria-current="page"
                href="#"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text" href="#">
                Shopping Cart
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-item-text">Orders</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
