import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Form } from './styles';
import './index.css';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
  // useState() atribui um valor inicial ao state
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  // Primeiro colocamos o efeito que queremos que ocorra e dentro do array específicamos quando queremos q ele ocorra, se deixarmos o array vazio ele irá ocorrer apenas 1 vez quando a página for carregada

  useEffect(() => {
    console.log('alou');

    setTimeout(() => {
      const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://investflix.herokuapp.com/categorias';
      fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    });
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <Form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias, 
          values,
        ]);

        clearForm();
      }}
      >
        <FormField label="Título da Categoria" type="text" name="titulo" value={values.titulo} onChange={handleChange} />

        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

        <div>
          <Button className="botaoCadastrar">Cadastrar</Button>
          <Link to="/">Ir para Home</Link>
        </div>

      </Form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

    </Template>
  );
}

export default CadastroCategoria;
