import { Routes, Route } from "react-router-dom";
import { About, Home, ProductPage, Contacts } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/company" element={<About />} />
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
  );
}
