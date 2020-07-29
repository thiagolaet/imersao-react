import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CadastroCategoria from './pages/Cadastro/Categoria'
import CadastroVideo from './pages/Cadastro/Video'
import PaginaErro from './pages/PaginaErro'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={PaginaErro}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);