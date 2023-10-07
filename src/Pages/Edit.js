import Menu from "./Menu";
import AddCategory from "../Components/AddCategory";
import RemoveCategory from "../Components/RemoveCategory";

export default function Edit() {
  return (
    <>
      <Menu />
      <h3>Adicionar categoria:</h3>
      <AddCategory />
      <hr />
      <h3>Remover categoria:</h3>
      <RemoveCategory />
    </>
  );
}
