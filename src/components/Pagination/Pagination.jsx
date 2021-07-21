import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearch } from '../../redux/slicers/searchSlice';
import { getChoosedPage } from '../../redux/slicers/pagesSlice';


const Pagination = ({ relevance }) => {
  const dispatch = useDispatch();
  const { list: { pages} } = useSelector((state) => state.search)
  const { pageName, choosed } = useSelector((state) => state.pages)
  const history = useHistory();

  const previousPage = () => {
    if(choosed <= 1) return ''

    const prevChoosed = choosed - 1
    dispatch(getChoosedPage(prevChoosed))

    const pageUrl = !relevance
    ? `${pageName}&page=${prevChoosed}`
    : `${pageName}&page=${prevChoosed}&orderby=relevance`;

    dispatch(getSearch(pageUrl))

    return history.push(`${prevChoosed}`)
  }

  const nextPage = () => {
    const nextChoosed = choosed + 1

    dispatch(getChoosedPage(nextChoosed))

    const pageUrl = !relevance
    ? `${pageName}&page=${nextChoosed}`
    : `${pageName}&page=${nextChoosed}&orderby=relevance`;

    dispatch(getSearch(pageUrl))

    return history.push(`${nextChoosed}`)
  }
  return (
    <section className="pagination">
        <button
          type="button"
          onClick={ previousPage }
          className="pagination__btn"
          >
          Previous Page
        </button>
        <p>page: {choosed} of {pages}</p>
        <button
          type="button"
          onClick={ nextPage }
          className="pagination__btn"
          >
          Next Page
        </button>
    </section>
  )
}

export default Pagination;
