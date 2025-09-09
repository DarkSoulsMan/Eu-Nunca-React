import styled from "styled-components";
import OpcoesFrases from "../OpcoesFrases";


const Tela = styled.div`
    display: flex;
    flex-direction: column;

`

const Titulo = styled.h2`
    font-size: 40px;
    padding: 5em 0 1em 16.5em;
    color: #fff;
`



function TelaJogo(){
    return(
        <Tela>
            <Titulo>Clique em uma das opções!</Titulo>
            <OpcoesFrases/>
        </Tela>



    )





}




export default TelaJogo