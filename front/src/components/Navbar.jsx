// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ links }) => {
  console.log("renderizar el NavBar");
  const className = 'nav-principal';

  return (
    <nav className='nav'>
      <ul className={className}>
        {links.map((elemento, index) => (
          <li key={index} className="nav-principal__item">
            <Link to={elemento.url}>{elemento.texto}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
