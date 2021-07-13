import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleById } from '../../redux/slicers/singleById'

const Singles = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.search )
  const { status } = useSelector((state) => state.search )
  const { data, size, pages } = list

  const renderResults = () => {
    return (
       <>{ data.map((single) => {
         return (
        <article key={single.id}>
          <h2>{single.title}</h2>
          <h4>{single.headline}</h4>
          <img src={single.featured_media.thumbnail} alt="card img"/>
          <Link to={`/single/${single.id}`}>
            <button onClick={ () => dispatch(getSingleById(single.id)) }>Details</button>
          </Link>
        </article>
        )
      })}
    </>
    )
  }

  return (
    <>
    <p>Artigos: {size}</p>
    <p>Paginas: {pages}</p>
    {status === 'loading' ? <p>Loading...</p> : renderResults()}
    </>
  )
}

export default Singles;
