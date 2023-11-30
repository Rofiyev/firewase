import { Routes, Route } from "react-router-dom";
import { Home, ProductPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}
