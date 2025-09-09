import styled from "styled-components";


const AppContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const SobreMim = styled.p`
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 36px;
    padding: 6em;


`




function Sobre(){
    return(
        <AppContainer>
            <SobreMim>
                Oi, eu sou o João Gabriel👋
                Criei este site como um projeto pessoal para praticar React e JavaScript, unindo aprendizado e diversão. 
                A ideia foi trazer para o digital o clássico jogo “Eu Nunca”, mas com categorias diferentes e frases variadas.
                Foi um exercício importante para mim, porque consegui trabalhar com rotas, integração com API (Axios) e manipulação de JSON.
                Espero que você curta jogar tanto quanto eu curti desenvolver! 
            </SobreMim>
        </AppContainer>



    )


}

export default Sobre