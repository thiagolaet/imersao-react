import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function create(objetoDaCategoria) {  
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível obter os dados');
  });
}

function deleteCategoria(id) {
  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    }
    })
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível deletar os dados');
  });
}

function getAll() {  
  return fetch(URL_CATEGORIES)
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function getAllWithVideos() {  
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaDoServidor) => {

    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  deleteCategoria
}