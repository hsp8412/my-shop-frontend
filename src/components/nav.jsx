import "../css/nav.css";
import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../store/page-slice";
import { toast } from "react-toastify";

const renderAvatar = (isLoggedIn) => {
  if (!isLoggedIn) {
    return (
      <div className="">
        <button
          className="search-button me-2 btn-sm"
          type="submit"
          onClick={() => {
            window.location = "/login";
          }}
        >
          Login
        </button>
        <button
          className="search-button btn-sm"
          type="submit"
          onClick={() => {
            window.location = "/register";
          }}
        >
          Register
        </button>
      </div>
    );
  }
  return (
    <div className="d-flex flex-row">
      <p className="greeting me-3 my-auto">Hi, user!</p>
      <button
        className="search-button btn-sm"
        type="submit"
        onClick={() => {
          window.location.reload();
        }}
      >
        Log out
      </button>
    </div>
  );
};

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const active = useSelector((state) => state.page.currentPage);
  const searchContents = useSelector((state) => state.page.searchContents);
  const itemsInCart = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchContents !== "") {
      dispatch(pageActions.clearSearchContents());
      window.location = `/search/${searchContents}`;
    } else {
      toast.error("Please enter the search text.");
    }
  };

  const renderItemsCount = () => {
    if (itemsInCart.length === 0) {
      return;
    }
    let total = 0;
    itemsInCart.forEach((item) => (total += item.quantity));
    return (
      <span className="items-count-circle">
        {"  "}
        <span className="items-count">{total}</span>
      </span>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav">
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
          <span className="navbar-toggler-icon toggle-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link nav-item-text ${
                  active === "Products" ? "active-item" : ""
                }`}
                aria-current="page"
                href="/"
                onClick={() => dispatch(pageActions.changePage("Products"))}
              >
                Products
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={`nav-link nav-item-text ${
                  active === "Cart" ? "active-item" : ""
                }`}
                href="/cart"
                onClick={() => dispatch(pageActions.changePage("Cart"))}
              >
                Shopping Cart
                {renderItemsCount()}
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link nav-item-text ${
                  active === "Orders" ? "active-item" : ""
                }`}
                href="/orders"
                onClick={() => dispatch(pageActions.changePage("Orders"))}
              >
                Orders
              </a>
            </li>
          </ul>
          <ul className="right-components d-flex d-inline navbar-nav">
            <li className="nav-item me-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) =>
                    dispatch(
                      pageActions.setSearchContents(e.currentTarget.value)
                    )
                  }
                />
                <button
                  className="search-button btn-sm"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">{renderAvatar(isLoggedIn)}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
