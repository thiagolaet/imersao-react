import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Form } from './styles';
import './index.css';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Loader from '../../../components/Loader';

function CadastroCategoria() {
  // useState() atribui um valor inicial ao state
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  var lastId = categorias.length;
  console.log("lastId" + lastId);

  // Primeiro colocamos o efeito que queremos que ocorra e dentro do array específicamos quando queremos q ele ocorra, se deixarmos o array vazio ele irá ocorrer apenas 1 vez quando a página for carregada

  useEffect(() => {

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

  function deletarCategoria(id) {
    document.getElementById(id).innerHTML = '';
    return categoriasRepository.deleteCategoria(id);
  }

  function editarCategoria(id) {
    console.log('categoria ' + id);
  }

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

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');


            let lastTableRow = document.querySelectorAll("tr");
            lastTableRow = lastTableRow[lastTableRow.length - 1];
            lastTableRow.id = lastId + 1;
          })

        clearForm();
      }}
      >
        <FormField label="Título da Categoria" type="text" name="titulo" value={values.titulo} onChange={handleChange} />

        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

        <div>
          <Button type="submit" className="botaoCadastrar">Cadastrar</Button>
          <Link to="/">Ir para Home</Link>
        </div>

      </Form>

      {categorias.length === 0 && (
        <Loader></Loader>
      )}

      {categorias.length >= 1 && (

        <table className="tabelaCategorias">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Cor</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            {categorias.map((categoria) => (
              <tr id={categoria.id} key={categoria.id}>
                <td>{categoria.titulo}</td>
                <td>{categoria.descricao}</td>
                <td><div className="campoCor" style={{background: categoria.cor}}></div></td>
                <td><button className="botaoTabela" onClick={(id) => editarCategoria(categoria.id)} >Editar</button></td>
                <td><button className="botaoTabela botaoRemover" onClick={(id) => deletarCategoria(categoria.id)}>Remover</button></td>
              </tr>
            ))}

          </tbody>

        </table>

      )}
    </Template>
  );
}

export default CadastroCategoria;
