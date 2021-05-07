import React, {useState} from 'react';
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Templatefield from './template'
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
      body: {
          backgroundColor: theme.palette.common.white,
      },
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(2, 0, 1),
  },
  divider :{
    marginBottom: 10,
  },
  surface:{
    marginTop: theme.spacing(4),
      padding:20,
      width:'55vw',
      background:'#fffcfc',
      marginInline: '20%',
  }
}));

let schema = yup.object().shape({
  street: yup.string().required('This field is required.'), 
  steet2: yup.string(), 
  city: yup.string().required('This field is required.'), 
  province: yup.string()
      .required('This field is required.')
});



function Review({step,state}) {
    const classes = useStyles();
    console.log("Review",state)
    return (
        <Container component="main" >
            <CssBaseline />
            <Paper  elevation={3} className={classes.surface}>
            <div className={classes.paper}>
                <Typography className={classes.form}>Name:{state.firstName}</Typography>
                <Typography className={classes.form}>Last Name:{state.lastName}</Typography>
                <Typography className={classes.form}>Address:{state.street}</Typography>
                <Typography className={classes.form}>City:{state.city}</Typography>
            </div>
            <Grid container spacing={2}>
                        <Grid item xs={6} >
                        <Button
                            onClick={()=>{step(s=>s-1)}}
                            id="back"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                        <Button
                            fullWidth
                            onClick={()=>{step(s=>s+1)}}
                            id="next"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                        </Grid>
                    </Grid>
                </Paper>
        </Container>
  );
}

export default Review;


