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
      const formData = new URLSearchParams();
      formData.append("name", name);
      formData.append("userId", userId);

      await axios.post("https://api.gastroname.com/addCategory", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
