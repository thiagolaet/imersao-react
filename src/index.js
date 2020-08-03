import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CadastroCategoria from './pages/Cadastro/Categoria'
import CadastroVideo from './pages/Cadastro/Video'
import PaginaErro from './pages/PaginaErro'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100
  }
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={PaginaErro}/>
      </Switch>
    </BrowserRouter>
  </AlertProvider>
,
  document.getElementById('root')
);