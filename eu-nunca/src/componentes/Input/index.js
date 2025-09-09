import styled from "styled-components";


const Input = styled.input`
  display: inline-block;
  background-color: #fff;
  color: red;
  border: 3px solid red;
  border-radius: 8px;
  font-size: 18px;
  padding: 0.8em 1.5em;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: red;
    color: #fff;
  }
`


export default Input