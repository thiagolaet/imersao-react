import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Form } from './styles';
import './index.css';

function CadastroCategoria() {
  // useState() atribui um valor inicial ao state
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.name, infosDoEvento.target.value);
  }

  // Primeiro colocamos o efeito que queremos que ocorra e dentro do array específicamos quando queremos q ele ocorra, se deixarmos o array vazio ele irá ocorrer apenas 1 vez quando a página for carregada

  useEffect(() => {
    console.log('alou');

    setTimeout(() => {
      const URL = 'http://localhost:8080/categorias'
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
        {values.nome}
      </h1>

      <Form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        setCategorias([
          ...categorias, values,
        ]);

        setValue(valoresIniciais);
      }}
      >
        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />

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
          <li key={categoria}>
            {categoria.nome}
          </li>
        ))}
      </ul>

    </Template>
  );
}

export default CadastroCategoria;
