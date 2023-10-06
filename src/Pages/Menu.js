import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Cardapio from "../Components/Cardapio";

const Menu = () => {
  const { userId } = useParams();

  const [items, setItems] = useState([]);

  const getItems = async () => {
    return await axios
      .get(`https://api.gastroname.com/getItemsByUserId?id=${userId}`)
      .then((res) => setItems(res.data));
  };

  useEffect(() => {
    getItems();
  }, []);

  const categories = ["Sobremesas", "Bebidas", "Pratos Principais"];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      {/* Pre-render images */}
      <div className="d-none">
        {items.map((item, index) => (
          <img src={item.image} />
        ))}
      </div>

      <div className="container mt-5">
        <h1>Cardápio</h1>
        <div className="d-flex flex-column mt-3">
          {!selectedCategory && (
            <div>
              {categories.map((category) => (
                <div>
                  <button
                    key={category}
                    className="btn btn-primary mb-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                  <br />
                </div>
              ))}
            </div>
          )}

          {selectedCategory && <Cardapio items={items} />}
        </div>
      </div>
    </>
  );
};

export default Menu;
