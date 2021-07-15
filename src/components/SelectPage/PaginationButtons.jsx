import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {getChoosedPage} from '../../redux/slicers/pagesSlice'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 const PaginationButtons = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const { total } = useSelector((state) => state.pages)
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(getChoosedPage(value))
  };



  return (
    <div className={classes.root}>
      <Pagination
        count={total}
        showFirstButton
        showLastButton
        variant="outlined"
        color="primary"
        page={page}
        onChange={ handleChange }
        // onClick={ () => dispatch(getChoosedPage(10))}
      />
    </div>
  );
}

export default PaginationButtons;
