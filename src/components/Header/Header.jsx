import React from 'react';
import Searcher from '../Searcher/Searcher';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logomarca"/>
        <p>
          <span className="blue">Mejor</span>
          <span className="darkblue">con</span>
          <span className="pink">Salud</span>
        </p>
      </header>
      <Searcher />
    </>
  )
}

export default Header;