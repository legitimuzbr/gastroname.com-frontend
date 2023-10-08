import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./Pages/Menu";
import Edit from "./Pages/Edit";
import Cadastro from "./Pages/Cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Gastroname Home</h1>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/:userId" element={<Menu />} />
        <Route path="/:userId/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
