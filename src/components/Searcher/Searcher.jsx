import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import BtnGoBack from '../Buttons/BtnGoBack';
import { FaSearch } from 'react-icons/fa';
import './style/searcher.css';
import { getPageName, getChoosedPage } from '../../redux/slicers/pagesSlice';
import Pagination from '../Pagination/Pagination'

const Searcher = () => {
  const dispatch = useDispatch();
  const { choosed } = useSelector((state) => state.pages)
  const history = useHistory();
  const location = useLocation().pathname;
  const [input, setInput] = useState();
  const [relevance, setRelevance] = useState(false)
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';

  const searchWithRelevance = () => {
    if(!relevance) {
      return setRelevance(true);
    }
    return setRelevance(false)
  }

  const requireApi =  () => {
    const defaultPage = 1
    dispatch(getChoosedPage(defaultPage));

    const inputUrl = !relevance
    ? `${input}&page=${defaultPage}`
    : `${input}&page=${defaultPage}&orderby=relevance`;

    dispatch(getPageName(input))
    dispatch(getSearch(inputUrl))

    if(location.includes('/singles/')) {
      return history.push(`${choosed}`)
    }
    return history.push(`/singles/${defaultPage}`)
  }

  return (
    <section className="search__container">
      {!location.includes('/single/') &&
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
            placeholder={ placeholder }
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
      { location.includes('/single/') && <BtnGoBack />}
      { location.includes('/singles/') && <Pagination state={relevance}/> }
    </section>
  )
}

export default Searcher;
