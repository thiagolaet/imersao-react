import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CadastroCategoria from './pages/Cadastro/Categoria/index.js'
import CadastroVideo from './pages/Cadastro/Video/index.js'
import PaginaErro from './pages/PaginaErro/index.js'

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