import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import BtnGoBack from '../Buttons/BtnGoBack';
import { FaSearch } from 'react-icons/fa';
import './style/searcher.css';
import { getPageName, getChoosedPage } from '../../redux/slicers/pagesSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  const { list: { pages} } = useSelector((state) => state.search)
  const { pageName, choosed } = useSelector((state) => state.pages)
  const history = useHistory();
  const location = useLocation().pathname;
  const [input, setInput] = useState();
  const [relevance, setRelevance] = useState(false)
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';
  const [url, setUrl] = useState();

  const searchWithRelevance = () => {
    if(!relevance) {
      return setRelevance(true);
    }
    return setRelevance(false)
  }

  useEffect(() => {
    const pageUrl = !relevance
    ? `${pageName}&page=${choosed}`
    : `${pageName}&page=${choosed}&orderby=relevance`;

    const inputUrl = !relevance
    ? `${input}&page=${choosed}`
    : `${input}&page=${choosed}&orderby=relevance`;

    if(input !== undefined) setUrl(inputUrl);
    if(input === undefined) { setUrl(pageUrl); return dispatch(getSearch(url))};

  },[choosed, input, relevance, url, pageName, dispatch]);

  const requireApi =  () => {
    dispatch(getPageName(input))
    dispatch(getSearch(url))
    if(location.includes('/singles/')) {
      return history.push(`${choosed}`)
    }
    return history.push(`/singles/${choosed}`)
  }

  const previousPage = () => {
    choosed > 1 && dispatch(getChoosedPage(choosed - 1));
    return dispatch(getSearch(url))

  }

  const nextPage = () => {
    dispatch(getChoosedPage(choosed + 1))
    return dispatch(getSearch(url))
  }

  const createPagination = () => {
    return (
      <section className="pagination">
        <Link to={`/singles/${choosed}`}>
          <button
            type="button"
            onClick={ previousPage }
            className="pagination__btn"
          >
            Previous Page
          </button>
        </Link>
          <p>page: {choosed} of {pages}</p>
        <Link to={`/singles/${choosed}`}>
          <button
            type="button"
            onClick={ nextPage }
            className="pagination__btn"
          >
            Next Page
          </button>
        </Link>
      </section>
    )
  }

  return (

    <section className="search__container">
      {!location.includes('/sin') &&
      <>
      <label
        name="relevance"
        className="search__label"
      >
        Search by Relevance
        <input
          className="search__checkbox"
          name="relevance"
          checked={ relevance }
          onChange={ searchWithRelevance }
          type="checkbox"
        />
      </label>
      <div className="search__box">
        <input
          className="box__input"
          type="text"
          placeholder={placeholder}
          onChange={ (e) => setInput(e.target.value) }
        />
        <button
          className="box__btn"
          type="button"
          onClick={ requireApi }
        >
          <FaSearch />
        </button>
      </div>
      </>
      }
      { location.includes('/single') && <BtnGoBack />}
      { location.includes('/singles') && createPagination() }
    </section>
  )
}

export default Searcher;
