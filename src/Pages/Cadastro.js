import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("id", username);
  
    try {
      await axios.post("http://localhost:4000/addUser", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Redireciona para a nova URL após sucesso
    window.location.href = `https://gastroname.com/${username}/edit`;

    } catch (error) {
      // Se a resposta da API contiver uma mensagem de erro, mostre-a. Caso contrário, mostre uma mensagem genérica.
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An error occurred while processing your request.';
      alert(errorMessage);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <h1>Crie sua conta:</h1>
              <div className="my-3">
                <label className="form-label">Nome do seu Restaurante</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite aqui"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Seu email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Seu username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    https://gastroname.com/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon3 basic-addon4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-text" id="basic-addon4">
                  Essa é a URL visível para seus clientes
                </div>
              </div>
              <button className="btn btn-success" type="submit">Criar conta</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
