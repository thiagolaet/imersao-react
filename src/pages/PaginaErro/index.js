import React from 'react';
import Template from '../../components/Template';
import { ImageField, Image, Link } from './styles';
import Erro from '../../assets/Erro.png'



function PaginaErro() {
    return (
      <Template>
        <ImageField>
          <Image alt="Erro 404" src={Erro}/>
          <Link href="https://stories.freepik.com/web">Illustration by Freepik Stories</Link>
        </ImageField>
      </Template>
    );
}

export default PaginaErro;