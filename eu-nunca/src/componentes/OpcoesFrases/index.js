import { useState } from "react";
import { getFraseAleatoria } from "../../servicos/jogo";
import styled from "styled-components";


const Opcoes = styled.ul`
    display: flex;
    padding: 0 0 0 23.9em;
`
const Opcao = styled.li`
  padding: 1em;
  margin: 1em;
  width: 210px;
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  background-color: #ffffff;
  border-radius: 0.5rem;
  border-left: 0 solid #00ff99;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
  text-content: center;
  cursor: pointer;

&:hover{
  padding-left: 0.5rem;
  border-left: 0.5rem solid #00ff99;
    
    
    }

`

const CardFrases = styled.div`
    display: flex;
    text-align: center;

`
const Frase = styled.p`
    color: #fff;
    font-size: 32px;
    margin: 3em 1em 1em 19em;
 


`


const FrasesOpcoes = ['POPULAR', 'PICANTE', 'RELACIONAMENTO', 'EXTREMO']

function OpcoesFrases(){
    const [frase, setFrase] = useState(null);

 async function handleClick(categoria) {
        const novaFrase = await getFraseAleatoria(categoria);
        setFrase(novaFrase);
    }

 return (
    <>
      <Opcoes>
        {FrasesOpcoes.map((frase) => (
          <Opcao key={frase} onClick={() => handleClick(frase)}>
            <p>{frase}</p>
          </Opcao>
        ))}
      </Opcoes>

      {frase && (
        <CardFrases>
          <Frase>{frase.nome}</Frase>
        </CardFrases>
      )}
    </>
  );

}
export default OpcoesFrases