import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";

const Menu = () => {
  const { userId } = useParams();

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    return await axios
      .get(`http://localhost:4000/getCategoriesByUserId?id=${userId}`)
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [items, setItems] = useState([]);

  const getItems = async () => {
    return await axios
      .get(`http://localhost:4000/getItemsByUserId?id=${userId}`)
      .then((res) => setItems(res.data));
  };

  useEffect(() => {
    getItems();
  }, []);

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
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Pizza do Seu Zé</h2>
          {selectedCategory && (
            <button
              className="btn btn-success mb-3"
              onClick={() => setSelectedCategory(null)}
            >
              Voltar
            </button>
          )}
        </div>
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
                  {category.name}
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
