import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddCategoryButton() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { userId } = useParams();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("userId", userId);

    await axios.post("https://api.gastroname.com/addCategory", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  };

  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className={`btn w-100 p-3 mb-3 border rounded`}
        onClick={toggleModal}
      >
        +
      </button>

      {/* Modal */}
      <form onSubmit={handleSubmit}>
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          style={showModal ? { display: "block" } : { display: "none" }}
          aria-hidden={!showModal}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Nome da categoria:
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o título do seu item"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
