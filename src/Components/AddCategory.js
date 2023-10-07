import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddCategory() {
  const { userId } = useParams();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    console.log(name);
    console.log(userId);

    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/addCategory", {
        name: name,
        userId: userId,
      });
      alert("Enviado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o título do seu item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );
}
