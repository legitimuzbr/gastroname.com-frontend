import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";

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
        {items.map((item) => (
          <img src={item.image} />
        ))}
      </div>

      <div className="container mt-5 align-items-center">
        <h2 className="mb-4">Gastroname</h2>
        {!selectedCategory && (
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <button
                  className={`btn w-100 p-3 ${
                    category === selectedCategory
                      ? "btn-dark"
                      : "btn-outline-dark"
                  } border rounded`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedCategory && (
          <Items items={items} setSelectedCategory={setSelectedCategory} />
        )}
      </div>
    </>
  );
};

export default Menu;
