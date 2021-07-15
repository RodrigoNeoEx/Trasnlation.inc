import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleById } from '../../redux/slicers/singleById';
import ShowAlert from '../Alert/ShowAlert';

const RenderSingles = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.search );
  const { data, size, pages } = list;

  return (
    <main>
      { pages === 0 && <ShowAlert />}
      <p>Paginas:{pages} - Artigos: {size}</p>
      <section>
        { data.map((single) => {
            return (
              <article key={single.id}>
                <title>{single.title}</title>
                <h1>{single.headline}</h1>
                <img src={single.featured_media.thumbnail} alt="card img"/>
                <Link to={`/single/${single.id}`}>
                  <button
                  onClick={() => dispatch(getSingleById(single.id))}
                  >
                    Details
                  </button>
                </Link>
                <hr/>
              </article>
            )
        })}
      </section>
    </main>
  )
}

export default RenderSingles;