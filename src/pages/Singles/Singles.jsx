import React from 'react';
import Header from '../../components/Header/Header';
import RenderSingles from '../../components/RenderPages/RenderSingles';
import { useSelector } from 'react-redux';
import CircularIndeterminate from '../../components/Loaging/Loading';

const Singles = () => {
  const { status } = useSelector((state) => state.search );

  return (
    <main>
    <Header />
    { status !== 'loading' ? <RenderSingles /> : <CircularIndeterminate />  }
    </main>
  )
}

export default Singles;
