import React from 'react';
import Header from '../../components/Header/Header';
import RenderSingles from '../../components/RenderPages/RenderSingles';
import { useSelector } from 'react-redux';

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
