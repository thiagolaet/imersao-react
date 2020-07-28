import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import Button from '../Button'
import ButtonLink from './Components/ButtonLink'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Laetflix Logo" />
            </Link>
        
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;