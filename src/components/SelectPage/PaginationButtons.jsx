import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {getChoosedPage} from '../../redux/slicers/pagesSlice';
import { getSearch } from '../../redux/slicers/searchSlice';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      marginTop: theme.spacing(2),

    },
  },
})
);

const PaginationButtons = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { list } = useSelector((state) => state.search );
  const { choosedPage } = useSelector((state) => state.pages);
  const { relevanceState, noRelevance, withRelevance} = useSelector((state) => state.relevance );
  const [page, setPage] = useState();

  const requireApi = () => {
    relevanceState
    ? dispatch(getSearch(withRelevance))
    : dispatch(getSearch(noRelevance));
    return history.push('/singles');
  }

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(getChoosedPage(value));
    return requireApi();
  };

  return (
    <div className={classes.root}>
      <Box display="flex"justifyContent="center">
      <Typography>Page: {choosedPage}</Typography>
        <Pagination
          count={list.pages}
          showFirstButton
          showLastButton
          variant="outlined"
          color="primary"
          page={page}
          defaultPage={choosedPage}
          onChange={ handleChange }
          siblingCount={0}
          boundaryCount={1}
        />
      </Box>
    </div>
  );
}

export default PaginationButtons;
