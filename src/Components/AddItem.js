import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AddItem() {
  const { userId } = useParams(); // Captura o parâmetro da URL

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.gastroname.com/getCategoriesByUserId?id=${userId}`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryId", category);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("userId", userId);

    console.log(formData);

    try {
      await axios.post("https://api.gastroname.com/addItem", formData, {
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        },
      });
      alert("Enviado com sucesso!");
    } catch (error) {
      alert("Erro ao enviar!");
      console.log(image);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          name="title"
          type="text"
          className="form-control"
          placeholder="Digite o título do seu item"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <textarea
          name="description"
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <select
          class="form-select"
          aria-label="Selecione a categoria"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected>Selecione a categoria</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Preço</label>
        <input
          name="price"
          type="number"
          className="form-control"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
          placeholder="Digite o preço do seu item"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Imagem do item</label>
        <input
          name="image"
          class="form-control"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success gap-1">
          Adicionar item
        </button>
      </div>
    </form>
  );
}
