import React from 'react';
import Searcher from '../Searcher/Searcher';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logomarca"/>
        <p><span>Mejor</span><span>con</span><span>Salud</span></p>
      </header>
      <Searcher />
    </>
  )
}

export default Header;