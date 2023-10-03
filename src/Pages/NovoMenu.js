import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 5rem;
  color: #333;
`;

const MenuItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  img {
    flex-shrink: 0; // impede a imagem de encolher
    width: 100px; // define a largura fixa
    height: 100%; // preenche a altura disponível
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .item-content {
    flex: 1;
    padding: 1rem;
  }

  h5 {
    margin-top: 0;
    color: #4caf50;
  }

  p {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    font-weight: bold;
    color: #4caf50;
  }
`;

function NovoMenu() {
  return (
    <StyledContainer className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12 mb-4">
          <MenuItem>
            <img src="https://via.placeholder.com/100" alt="Imagem do prato" />
            <div className="item-content">
              <h5>Bebida XYZ</h5>
              <p>Descrição da bebida aqui. Ingredientes, etc.</p>
              <p className="price">$4.99</p>
            </div>
          </MenuItem>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <MenuItem>
            <img src="https://via.placeholder.com/100" alt="Imagem do prato" />
            <div className="item-content">
              <h5>Sobremesa ABC</h5>
              <p>Descrição da sobremesa aqui. Ingredientes, etc.</p>
              <p className="price">$6.99</p>
            </div>
          </MenuItem>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <MenuItem>
            <img src="https://via.placeholder.com/100" alt="Imagem do prato" />
            <div className="item-content">
              <h5>Prato Principal DEF</h5>
              <p>
                Descrição do prato aqui. Ingredientes, modo de preparo, etc.
              </p>
              <p className="price">$14.99</p>
            </div>
          </MenuItem>
        </div>
      </div>
    </StyledContainer>
  );
}

export default NovoMenu;
