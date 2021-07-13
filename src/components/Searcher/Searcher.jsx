import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/slicers/searchSlice';

const Searcher = () => {
  const dispatch = useDispatch()
  const [relevance, setRelevance] = useState(false);
  const [input, setInput] = useState();
  const placeholder = 'Busca artículos, noticias, enfermidades, etc...';

  const searchWithRelevance = () => {
    !relevance ? setRelevance(true) : setRelevance(false);
  }

  function requireApi() {
    relevance
    ? dispatch(getSearch(`${input}&page=1&orderby=relevance`))
    : dispatch(getSearch(input));
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" placeholder={placeholder} onChange={ inputHandler }/>
      <label name="relevance">Relevance
        <input name="relevance" checked={ relevance } onChange={ searchWithRelevance } type="checkbox" />
      </label>
      <button type="button" onClick={ requireApi }><FaSearch /></button>
    </>
  )
}

export default Searcher;