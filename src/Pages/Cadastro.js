import { useState } from "react";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>Crie sua conta:</h1>
            <div class="my-3">
              <label className="form-label">Nome do seu Restaurante</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite aqui"
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
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="form-text" id="basic-addon4">
                Essa é a URL visível para seus clientes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
