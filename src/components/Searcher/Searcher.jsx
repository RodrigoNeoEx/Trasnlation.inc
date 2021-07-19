import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import { FaSearch } from 'react-icons/fa';
import BtnGoBack from '../Buttons/BtnGoBack';
import { getRelevanceUrl, getUrl, setRelevanceState } from '../../redux/slicers/relevanceSlice';
import './style/searcher.css';

const Searcher = () => {
  const dispatch = useDispatch();
  const { choosedPage } = useSelector((state) => state.pages );
  const { relevanceState, noRelevance, withRelevance} = useSelector((state) => state.relevance );
  const history = useHistory();
  const location = useLocation().pathname;
  const [input, setInput] = useState();
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';


  const searchWithRelevance = () => {
    !relevanceState
     ? dispatch(setRelevanceState(true))
     : dispatch(setRelevanceState(false));
  };

  useEffect(() => {
    dispatch(getUrl(`${input}&page=${choosedPage}`))
    dispatch(getRelevanceUrl(`${input}&page=${choosedPage}&orderby=relevance`))
  },[choosedPage, dispatch, input]);

  const requireApi = () => {
    relevanceState
    ? dispatch(getSearch(withRelevance))
    : dispatch(getSearch(noRelevance));
    if(location.includes('single/')) {
      history.goBack();
      return history.push('./singles');
    }
    return history.push('./singles');
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <section className="search__container">
      <label
        name="relevance"
        className="search__label"
      >
        Search by Relevance
        <input
          className="search__checkbox"
          name="relevance"
          checked={ relevanceState }
          onChange={ searchWithRelevance }
          type="checkbox"
        />
      </label>
      <div className="search__box">
        <input
          className="box__input"
          type="text"
          placeholder={placeholder}
          onChange={ inputHandler }
        />
        <button
          className="box__btn"
          type="button"
          onClick={ requireApi }
        >
          <FaSearch />
        </button>
      </div>

      { location.includes('/single') && <BtnGoBack /> }
    </section>
  )
}

export default Searcher;
