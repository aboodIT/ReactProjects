import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import './basket.css'
import CartItem from './CartItem';
import useStyles from './basketstyles';
import {empty} from './BasketSlice'

const Basket = () => {
  const classes = useStyles();
  const dispatch = useDispatch()  
  const basket = useSelector( (state)=> {
    console.log("jootay",state);
    return state.basket
    });
//   const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {basket.shoes.map((shoe) => (
          <Grid item xs={12} sm={3}>
            <CartItem shoe={shoe} />    
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {basket.total}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>{dispatch(empty())}}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !basket ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Basket;
