import React from 'react';
import Header from '../../components/Header/Header';
import RenderSingles from '../../components/RenderPages/RenderSingles';
import { useSelector } from 'react-redux';
import PaginationButtons from '../../components/SelectPage/PaginationButtons';

const Singles = () => {
  const { status } = useSelector((state) => state.search );

  return (
    <main>
    <Header />
    <PaginationButtons />
    { status === 'loading' ? <p>Loading...</p> : <RenderSingles /> }
    </main>
  )
}

export default Singles;
