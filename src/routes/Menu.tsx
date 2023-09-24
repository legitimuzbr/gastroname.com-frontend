import { useParams } from "react-router-dom";
import Cardapio from "../components/Cardapio";
import Navbar from "../components/Navbar";



export default function Menu() {


  const { menu_id } = useParams();

  if(menu_id !== "pizza-do-ze") {
    return <>Menu não encontrado</>
  }
  
  return (
    <>
      <Navbar />
      <Cardapio />
    </>
  )
}