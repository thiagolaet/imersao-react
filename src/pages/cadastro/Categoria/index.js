import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  // useState() atribui um valor inicial ao state
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.name, infosDoEvento.target.value);
  };

  return (
    <Template>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias, values
        ]);

        setValue(valoresIniciais);
      }}>
        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}/>

        <FormField label="Descrição" type="text" name="descricao" value={values.descricao} onChange={handleChange}/>

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange}/>

        <button>Cadastrar</button>

      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">Ir para Home</Link>

    </Template>
  );
}

export default CadastroCategoria;