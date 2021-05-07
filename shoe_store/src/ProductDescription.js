import React from 'react';
import {shoes} from './Products.js';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux'
import { add } from './BasketSlice';
import Paper from '@material-ui/core/Paper';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const useStyles = makeStyles({
p:{
    textAlign:"left"
},
});

export default function ProductDescription() {
    const {id} = useParams()
    const shoe = shoes[id]
    const classes = useStyles();

    const dispatch = useDispatch();
    

    return (
        <div className='n'>
          <Grid container spacing={1} >
            <Grid item xs={12}>
              <h1>{shoe.name}</h1>
            </Grid>
            <Grid item xs={6} >
              <div className='imgholder'><img src={shoe.img} className='img' alt={id} /></div>
            </Grid>
            <Grid item xs={6} className={classes.p}>
              <Paper elevation={3} className='paper'>
                <p><strong>Description: </strong>{shoe.description}</p>
                <Grid item xs={12}>
                  <p><strong>Price: </strong>{shoe.price}$</p>
                </Grid>
                <button onClick={()=>{dispatch(add(id))}}>Add to cart</button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}
