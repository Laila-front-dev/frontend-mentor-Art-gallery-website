import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
