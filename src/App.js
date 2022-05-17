import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Products from "./pages/products";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
