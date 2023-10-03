import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "./Card";

export default function Cardapio() {
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

  return (
    <>
      <div className="container py-3">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3">
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
