import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './componentes/Header';
import Home from './rotas/home';
import RodaPe from './componentes/RodaPe';
import Jogo from './rotas/jogo';
import Sobre from './rotas/sobre';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  list-style: none;    
}
  
  a, a:visited, a:link {
    text-decoration: none;
    color: inherit; /* mantém a cor do texto atual */
  }



`




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/jogo' element={<Jogo />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
        <RodaPe/>
      </ BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
