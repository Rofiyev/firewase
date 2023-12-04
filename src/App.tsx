import { Routes, Route } from "react-router-dom";
import { About, CategoryDocs, Contacts, Home, ProductDetail, ProductPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/company" element={<About />} />
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/documents/:category" element={<CategoryDocs />} />
      <Route path="/products/:product" element={<ProductDetail />} />
    </Routes>
  );
}
