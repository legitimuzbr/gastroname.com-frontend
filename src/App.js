import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Menu from "./Pages/Menu";
import Items from "./Pages/Items";
import Item from "./Pages/Item";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Gastroname</h1>} />
        <Route path="/:userId" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
