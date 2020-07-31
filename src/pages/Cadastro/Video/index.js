import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [ categorias, setCategorias ] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={e => {
        e.preventDefault();
        history.push('/');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log(categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou um sucesso!');
            history.push('/');
          })
      }}>

        <FormField 
        label="Título do Vídeo" 
        type="text" 
        name="titulo" 
        value={values.titulo}
        onChange={handleChange} />

        <FormField 
        label="URL do Vídeo" 
        type="text" 
        name="url" 
        value={values.url}
        onChange={handleChange} />

        <FormField
        label="Categoria"
        name="categoria"
        value={values.categoria}
        onChange={handleChange}
        suggestions={categoryTitles}
        />

        <Button type="submit" className="botaoCadastrar">Cadastrar</Button>

        <Link to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>

      </form>

    </Template>
  );
}

export default CadastroVideo;