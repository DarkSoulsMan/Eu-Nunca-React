import styled from "styled-components";


const FooterContainer = styled.footer`
    background-color: #302b63;
    color: #fff; /* garante que o texto fique visível */
    display: flex;
    justify-content: center;
`

const Jogar = styled.p`
    font-size: 12px;
    font: transparent;


`


function RodaPe(){
    return(
        <FooterContainer>
            <Jogar>ai...ai... vou jogar... AI...AI...TÔ JOGANDO</Jogar>
        </FooterContainer>
    );
}

export default RodaPe