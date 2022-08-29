import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";
import "./App.css";
import Orders from "./pages/orders";
import SearchResult from "./pages/searchResult";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute";
import Register from "./pages/register";
import Index from "./pages";
import Footer from "./components/footer";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App wrapper">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:uuid" element={<ProductDetail />} />
          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="/user" element={<Navigate to="/login" />} />
            <Route path="/user/cart" element={<Cart />} />
            <Route path="/user/orders" element={<Orders />} />
            <Route path="/user/profile" element={<Profile />} />
          </Route>
          <Route path="/search" element={<SearchResult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
