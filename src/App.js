import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./Pages/Menu";
import Edit from "./Pages/Edit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Gastroname</h1>} />
        <Route path="/:userId" element={<Menu />} />
        <Route path="/:userId/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
