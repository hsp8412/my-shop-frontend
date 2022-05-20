import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
