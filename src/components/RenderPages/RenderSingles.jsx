import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleById } from '../../redux/slicers/singleById';
import ShowAlert from '../Alert/ShowAlert';
import './styles/singlesContainer/container.css';
import './styles/singlesCards/cards.css';

const RenderSingles = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.search );
  const { data, size, pages } = list;

  return (
    <main className="singles__container">
      { pages === 0 && <ShowAlert /> }
      <p className="singles__info">Paginas:{pages} - Artigos: {size}</p>
      <section className="singles__articles">
        { data.map((single) => {
            return (
              <article key={single.id} className="card">
                <title>{single.title}</title>
                <h1 className="card__title">{single.headline}</h1>
                <img className="card__img" src={single.featured_media.thumbnail} alt="card img"/>
                <Link
                 className="card__link"
                 to={`/single/${single.id}`}
                >
                  <button
                  className="card__btn"
                  onClick={() => dispatch(getSingleById(single.id))}
                  >
                    Detalhes do Artigo
                  </button>
                </Link>
              </article>
            );
        })}
      </section>
    </main>
  );
};

export default RenderSingles;
