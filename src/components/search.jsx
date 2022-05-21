import React from "react";

const Search = ({ placeHolder, products }) => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="search-button btn-sm" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
