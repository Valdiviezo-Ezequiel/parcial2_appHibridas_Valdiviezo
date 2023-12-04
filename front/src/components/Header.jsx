// Header.jsx
import React, { useState } from 'react';
import NavBar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
  console.log("renderizar el Header");
  const [links] = useState([
    { url: '/Home', texto: 'INICIO' },
    { url: '/GameList', texto: 'LISTA DE JUEGOS' },
    { url: '/Votes', texto: 'VOTAR' },
    { url: '/JudgeCreate', texto: 'CREAR JUEGO' },
    { url: '/JudgeUpdate', texto: 'MODIFICAR JUEGO' },
    { url: '/JudgeDelete', texto: 'ELIMINAR JUEGO' },
    { url: '/UserCreate', texto: 'CREAR USUARIO' },
    // { url: '/Login', texto: 'INICIAR SESIÓN' },
    { url: '/Logout', texto: 'CERRAR SESIÓN' },
  ]);

  return (
    <header>
      <div className='headerOne'>
        <h1 className="hola">GOTO Game JAM</h1>
        <img className="logo" src={logo} alt="GOTO Game JAM" />
      </div>
      <NavBar links={links} />
    </header>
  );
};

export default Header;
