import React from 'react';
import { FooterBase, FooterLink } from './styles';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <img className="Logo" src={Logo} alt="Logo da Investflix" />
      </Link>
      <p>
        Orgulhosamente criado por <FooterLink href="https://github.com/thiagolaet">Thiago Laet</FooterLink> durante a
        {' '}
        <FooterLink href="https://www.alura.com.br/">
          Imersão React da Alura
        </FooterLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
