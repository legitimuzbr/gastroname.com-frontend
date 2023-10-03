import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const Logo = styled.img`
    max-width: 200px;
    display: block;
    margin: 0 auto 3rem auto;
`;

const CategoryButton = styled.button`
    background-color: #4CAF50;  // Verde
    color: #fff; 
    border: 2px solid #388E3C;  // Um verde um pouco mais escuro para a borda
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
        box-shadow: 0px 10px 20px rgba(60, 142, 60, 0.2);  // Sombra com um toque de verde
    }

    &:focus {
        outline: none;
    }
`;

function CategoryButtons() {
    return (
        <>
            <GlobalStyle />
            <StyledContainer className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <Logo src="https://staging.agenciatucano.com/legitimuz/wp-content/uploads/2023/09/Logotipo-Legitimuz.svg" alt="Logotipo da Empresa" />
                        <div className="d-flex flex-column align-items-stretch mt-3">
                            <CategoryButton>
                                Bebida
                            </CategoryButton>
                            <CategoryButton>
                                Sobremesa
                            </CategoryButton>
                            <CategoryButton>
                                Prato Principal
                            </CategoryButton>
                        </div>
                    </div>
                </div>
            </StyledContainer>
        </>
    );
}

export default CategoryButtons;