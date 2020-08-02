import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <img className="Logo" src={Logo} alt="Logo da Investflix" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
