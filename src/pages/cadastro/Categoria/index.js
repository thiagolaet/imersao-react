import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return (
      <Template>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">Ir para Home</Link>

      </Template>
    );
}

export default CadastroCategoria;