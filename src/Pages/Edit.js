import Menu from "./Menu";
import AddCategory from "../Components/AddCategory";
import RemoveCategory from "../Components/RemoveCategory";
import AddItem from "../Components/AddItem";

export default function Edit() {
  return (
    <>
      <Menu />
      <div className="container">
        <h3>Adicionar categoria:</h3>
        <AddCategory />
        <hr />
        <h3>Remover categoria:</h3>
        <RemoveCategory />
        <hr />
        <h3>Adicionar item:</h3>
        <AddItem />
      </div>
    </>
  );
}
