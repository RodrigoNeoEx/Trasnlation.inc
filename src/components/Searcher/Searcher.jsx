import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import { FaSearch } from 'react-icons/fa';
import BtnGoBack from '../Buttons/BtnGoBack';
import { getRelevanceUrl, getUrl, setRelevanceState } from '../../redux/slicers/relevanceSlice';

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
     : dispatch(setRelevanceState(false))
  }

  dispatch(getUrl(`${input}&page=${choosedPage}`))
  dispatch(getRelevanceUrl(`${input}&page=${choosedPage}&orderby=relevance`))

  const requireApi = async() => {
    relevanceState
    ? dispatch(getSearch(withRelevance))
    : dispatch(getSearch(noRelevance));
    return history.push('./singles')
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" placeholder={placeholder} onChange={ inputHandler }/>
      <label name="relevance">Relevance
        <input
        name="relevance"
        checked={ relevanceState }
        onChange={ searchWithRelevance }
        type="checkbox" />
      </label>
      <button type="button" onClick={ requireApi }><FaSearch /></button>
      { location.includes('/single') && <BtnGoBack /> }
    </>
  )
}

export default Searcher;