import React from "react";
import { getCategories } from "../../service/categoryService";
import { useDispatch, useSelector } from "react-redux";
import "../../css/products.css";

const ProductFilter = ({ setActiveFilter, activeFilter, setActivePage }) => {
  const categories = useSelector((state) => state.categories.categoryList);
  return (
    <div className="container px-5 mt-4 mb-0">
      <div className="card">
        <div className="card-body my-2">
          {categories.map((category) => (
            <div
              key={category.uuid}
              className={`d-inline-block mx-2 mt-2 ${
                activeFilter && category.id === activeFilter.id
                  ? "active-filter"
                  : "filter-button"
              }`}
              onClick={() => {
                if (!activeFilter || category.id !== activeFilter.id) {
                  setActiveFilter(category);
                  setActivePage(1);
                }
              }}
            >
              {category.name}
            </div>
          ))}
          <div className="container">
            <div
              className="filter-clear mt-3 d-inline-block"
              onClick={() => {
                setActiveFilter({
                  uuid: "",
                  name: "",
                });
                setActivePage(1);
              }}
            >
              Clear filter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
