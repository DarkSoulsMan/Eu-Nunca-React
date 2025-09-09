import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;

`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 5px 5px;
    cursor: pointer;
    min-width: 120px;
`






const TextoOpcoes = ['INICIO', 'SOBRE', 'SURPRESA']



function OpcoesHeader(){
    return( 
    <Opcoes>
        { TextoOpcoes.map( (texto) => (
            <Link key={texto} to={`/${texto.toLowerCase()}`}>
                <Opcao>
                    <p>{texto}</p>
                </Opcao>
            </Link>
        ))}    
    </Opcoes>
    
    )
}

export default OpcoesHeader