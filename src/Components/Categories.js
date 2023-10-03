import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff;  // Fundo branco
    color: #333;  // Cor de texto padrão mais escura
  }
`;

const StyledContainer = styled.div`
  margin-top: 5rem;
  min-height: 100vh;
  color: #333;
`;

const StyledLogo = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0 auto 3rem auto;
  color: #333; // a mesma cor que foi definida para textos
  font-weight: bold;
`;

const CategoryButton = styled.button`
  background-color: #4caf50; // Verde
  color: #fff;
  border: 2px solid #388e3c; // Um verde um pouco mais escuro para a borda
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(60, 142, 60, 0.2); // Sombra com um toque de verde
  }

  &:focus {
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function CategoryButtons() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <StyledLogo>Nome da Empresa</StyledLogo>
            <div className="d-flex flex-column align-items-stretch mt-3">
              <StyledLink to="/bebida">
                <CategoryButton>Bebida</CategoryButton>
              </StyledLink>
              <StyledLink to="/sobremesa">
                <CategoryButton>Sobremesa</CategoryButton>
              </StyledLink>
              <StyledLink to="/hamburgers">
                <CategoryButton>Hamburgers</CategoryButton>
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledContainer>
    </>
  );
}

export default CategoryButtons;
