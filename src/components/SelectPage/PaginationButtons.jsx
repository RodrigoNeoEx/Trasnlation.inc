import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 const PaginationButtons = () => {
  const classes = useStyles();
  const { total } = useSelector((state) => state.pages)

  return (
    <div className={classes.root}>
      <Pagination count={total} showFirstButton showLastButton />
    </div>
  );
}

export default PaginationButtons;
