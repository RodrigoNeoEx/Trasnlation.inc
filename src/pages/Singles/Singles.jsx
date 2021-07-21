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
<<<<<<< HEAD
=======
    { status !== 'loading' && <PaginationButtons /> }
>>>>>>> 4875d1ab0e7e9d46de53ceca2529b0da6ff8ec10
    { status !== 'loading' ? <RenderSingles /> : <CircularIndeterminate />  }
    </main>
  )
}

export default Singles;
