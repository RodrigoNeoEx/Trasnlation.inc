import React from 'react';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleById } from '../../redux/slicers/singleById';
import  { getTotal }  from '../../redux/slicers/pagesSlice';
import PaginationButtons from '../../components/SelectPage/PaginationButtons';

const Singles = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.search )
  const { status } = useSelector((state) => state.search )
  const { data, size, pages } = list
  dispatch(getTotal(pages))

  const renderResults = () => {
    return (
       <>{ data.map((single) => {
         return (
        <article key={single.id}>
          <title>{single.title}</title>
          <h1>{single.headline}</h1>
          <img src={single.featured_media.thumbnail} alt="card img"/>
          <Link to={`/single/${single.id}`}>
            <button onClick={ () => dispatch(getSingleById(single.id)) }>Details</button>
          </Link>
          <hr/>
        </article>
        )
      })}
    </>
    )
  }

  return (
    <main>
    <Header />
    <p>Artigos: {size}</p>
    <p>Paginas: {pages}</p>
    <PaginationButtons count={pages}/>
      <section>
        {status === 'loading' ? <p>Loading...</p> : renderResults()}
      </section>
    </main>
  )
}

export default Singles;
