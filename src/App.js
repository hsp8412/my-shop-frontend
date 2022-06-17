import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";
import { ToastContainer } from "react-toastify";
import Orders from "./pages/orders";
import SearchResult from "./pages/searchResult";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/user" element={<ProtectedRoute />}>
                <Route path="/user" element={<Navigate to="/login" />} />
                <Route path="/user/cart" element={<Cart />} />
                <Route path="/user/orders" element={<Orders />} />
            </Route>
          {/*<Route path="/cart" element={<Cart />} />*/}
          {/*<Route path="/orders" element={<Orders />} />*/}
          <Route path="/search/:key" element={<SearchResult />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
