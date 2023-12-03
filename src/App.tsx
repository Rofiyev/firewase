import { Routes, Route } from "react-router-dom";
import { About, CategoryDocs, Home, ProductPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/company" element={<About />} />
      <Route path="/documents/:category" element={<CategoryDocs />} />
    </Routes>
  );
}
