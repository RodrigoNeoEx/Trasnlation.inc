import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import { FaSearch } from 'react-icons/fa';

const Searcher = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [relevance, setRelevance] = useState(false);
  const [page, setPage] = useState(1)
  const [input, setInput] = useState();
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';

  const searchWithRelevance = () => {
    !relevance ? setRelevance(true) : setRelevance(false);
  }

  // criar component funcional

  function requireApi() {
    const noRelevance = `${input}&page=${page}`
    const withRelvance = `${noRelevance}&orderby=relevance`
    relevance
    ? dispatch(getSearch(withRelvance))
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
        checked={ relevance }
        onChange={ searchWithRelevance }
        type="checkbox" />
      </label>
      <button type="button" onClick={ requireApi }><FaSearch /></button>
    </>
  )
}

export default Searcher;