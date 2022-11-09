import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products-actions";
import ProductList from "../components/products/productList";
import _ from "lodash";
import { productsActions } from "../store/products-slice";
import LoginPrompt from "../components/products/loginPrompt";
import { paginate } from "../utils/pagination";
import ProductPagination from "../components/products/productPagination";
import ProductFilter from "../components/products/productFilter";
import { fetchCategories } from "../store/categories-actions";
import categoriesSlice, { categoriesActions } from "../store/categories-slice";
import MySpinner from "../components/myspinner";

const Products = () => {
  const [activePage, setActivePage] = useState(1);
  const [activeFilter, setActiveFilter] = useState({
    uuid: "",
    name: "",
  });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.itemList);
  const productsLoading = useSelector((state) => state.products.loading);
  const productsPerRow = useSelector((state) => state.products.itemsPerRow);
  const categoriesLoading = useSelector((state) => state.categories.loading);
  const pageSize = 6;
  let filtered;
  if (activeFilter.uuid !== "") {
    filtered = products.filter((product) => {
      return product.categoryId === activeFilter.id;
    });
  } else {
    filtered = products;
  }
  const pagination = paginate(filtered, activePage, pageSize);
  const numOfPages = Math.floor(filtered.length / pageSize) + 1;
  const display = _.chunk(pagination, productsPerRow);

  const [loadingProducts, setLoadingProducts] = useState({});

  useEffect(() => {
    dispatch(productsActions.productsLoading());
    dispatch(categoriesActions.categoriesLoading());
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productsActions.setItemsPerRow(3));
  });

  return productsLoading === "pending" || categoriesLoading === "pending" ? (
    <div className="mt-5 d-flex flex-column align-items-center">
      <MySpinner />
    </div>
  ) : (
    <div className="d-flex flex-column align-items-center">
      <ProductFilter
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
        setActivePage={setActivePage}
      />
      <ProductList display={display} />
      <LoginPrompt />
      <ProductPagination
        setActive={setActivePage}
        active={activePage}
        numOfPages={numOfPages}
      />
    </div>
  );
};

export default Products;
