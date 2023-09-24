import Card from "./Card"
import { useParams } from "react-router-dom";

export default function Cardapio() {

  const { menu_id } = useParams()

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  )

}