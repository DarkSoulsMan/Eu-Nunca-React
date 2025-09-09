import { Link } from "react-router-dom";
import styled from "styled-components";





const ParagrafoContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 3em 0;

`
const Titulo = styled.h2`
    width: 100%;
    color: #fff;
    font-size: 50px;
    
`


const Conteudo = styled.p`
    width: 60%;
    color: #fff;
    font-size: 30px;
    padding: 0 0 0 12.5em;

`

const Botao = styled.button`
    border: 1px solid #FFF;
    background-color: purple;
    border: 1px solid black;
    text-content: center;
    padding: 15px 15px 15px 15px;
    border-radius: 15px;
    width: 200px;
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
`





function ParagrafoApresentacao(){
    return(
        <ParagrafoContainer>
            <Titulo>Bem-vindo ao "Eu Nunca" 🎉</Titulo>
            <Conteudo>Este site foi criado como um projeto pessoal para unir aprendizado em programação e diversão. Aqui você pode jogar “Eu Nunca” em diferentes categorias e 
                descobrir frases aleatórias que deixam o jogo ainda mais interessante.
                Divirta-se e jogue com os amigos! 🚀
            </Conteudo>
            <Link to={`/jogo`}>
                <Botao>JOGAR</Botao>
            </Link>
        </ParagrafoContainer>

    )


}

export default ParagrafoApresentacao