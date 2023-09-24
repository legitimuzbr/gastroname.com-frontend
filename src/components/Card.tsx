import { useParams } from "react-router-dom";

export default function Card() {

  const { menu_id } = useParams()

  if(menu_id !== "pizza-do-ze") {
    return <>Menu não encontrado</>
  }

  return (
    <>


            <div className="card mb-3">
                <img src="https://st2.depositphotos.com/1692343/5636/i/450/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pizza de calabresa</h5>
                  <p className="card-text">Desfrute da harmonia perfeita entre calabresa suculenta, cebolas crocantes e queijo derretido. Massa fina e sabor inigualável, remetendo às tradicionais pizzarias italianas. Transforme sua noite com esta delícia. Peça já! 🍕</p>
                  <p className="card-text text-success fw-bold">R$ 132,92</p>
                </div>
              </div>
    </>
  )

}