import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import './style/loading.css';


const CircularIndeterminate = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div display="flex" className={classes.root}>
      <Box
        position="absolute"
        top="35%"
        left="35%"
       >
         <p>Loading...</p>
        <CircularProgress
          size={100}
        />
      </Box>
    </div>
  );
};

export default CircularIndeterminate;
