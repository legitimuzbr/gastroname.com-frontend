import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AddItemButton(props) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { userId } = useParams();
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
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryId", props.selectedCategoryId);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("userId", userId);

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
    <>
      <button type="button" className="btn btn-success" onClick={toggleModal}>
        Adicionar item
      </button>

      <form onSubmit={handleSubmit}>
        <div
          className={`modal fade ${showModal ? "show d-block" : ""}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
          style={showModal ? { backgroundColor: "rgba(0,0,0,0.5)" } : {}}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Adicionar item
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-primary">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
