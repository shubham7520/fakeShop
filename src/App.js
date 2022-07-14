import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
