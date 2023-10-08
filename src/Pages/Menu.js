import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import AddCategoryButton from "../Components/AddCategoryButton";
import Icon from "../Components/Icon";
import AddItemButton from "../Components/AddItemButton";

const Menu = (props) => {
  const { userId } = useParams();

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    return await axios
      .get(`https://api.gastroname.com/getCategoriesByUserId?id=${userId}`)
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `https://api.gastroname.com/deleteCategory/${categoryId}`
      );
      if (response.status === 200) {
        console.log("Item deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting the item", error);
    }
  };

  const [items, setItems] = useState([]);

  const getItems = async () => {
    return await axios
      .get(`https://api.gastroname.com/getItemsByUserId?id=${userId}`)
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
            {props.edit && <AddCategoryButton />}
            {categories.map((category, index) => (
              <div className="col-md-4 mb-3 d-flex" key={index}>
                <button
                  className={`btn w-100 p-3 ${
                    category === selectedCategory
                      ? "btn-dark"
                      : "btn-outline-dark"
                  } border rounded`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
                {props.edit && (
                  <button
                    className={`btn w-20 p-3} border rounded bg-dark text-light`}
                    onClick={() => deleteCategory(category.id)}
                  >
                    <Icon icon="remove" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedCategory && (
          <>
            <Items
              items={items}
              selectedCategory={selectedCategory}
              edit={props.edit}
            />
            {props.edit && (
              <AddItemButton selectedCategoryId={selectedCategory} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
