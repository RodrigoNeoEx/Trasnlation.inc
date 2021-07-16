import React from 'react';
import ButterFly from '../../components/ButterFly/Butterfly';
import Header from '../../components/Header/Header';
import './style/homepage.css'

const Home = () => {
  return (
    <div>
      <Header />
      <ButterFly />
      <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, laudantium fugiat. Neque mollitia nihil molestiae saepe quia? Eveniet vitae, vel quos molestiae eos debitis obcaecati tenetur labore deserunt beatae illum?</p>
    </div>
  )
}

export default Home;