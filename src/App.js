import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Menu from "./Pages/Menu";
import Items from "./Pages/Items";
import Item from "./Pages/Item";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Link to="/1" preventScrollReset={true}>
              Gastroname
            </Link>
          }
        />
        <Route path="/:userId" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
