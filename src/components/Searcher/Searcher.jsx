import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/slicers/searchSlice';

const Searcher = () => {
  const dispatch = useDispatch()
  const [relevance, setRelevance] = useState(false);
  const [page, setPage] = useState(1)
  const [input, setInput] = useState();
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';

  const searchWithRelevance = () => {
    !relevance ? setRelevance(true) : setRelevance(false);
  }

  function requireApi() {
    const teste1 = `${input}&page=${page}`
    const teste2 = `${teste1}&orderby=relevance`
    relevance
    ? dispatch(getSearch(teste2))
    : dispatch(getSearch(teste1));
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