import React from 'react';
import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import RenderSingles from '../../components/renderSingles/renderSingles';

const Singles = () => {
  const { status } = useSelector((state) => state.search );

  return (
    <main>
    <Header />
    { status === 'loading' ? <p>Loading...</p> : <RenderSingles /> }
    </main>
  )
}

export default Singles;
