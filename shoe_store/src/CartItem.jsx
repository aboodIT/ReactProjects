import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import {shoes} from './Products'
import useStyles from './cartstyles';
import {remove} from './BasketSlice'
import {useDispatch, useSelector} from 'react-redux'


const CartItem = ({shoe}) => {
  const classes = useStyles();
  const dispatch = useDispatch()  
  const shoe_details = shoes[shoe]
  // const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  // const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={shoe_details.img} alt={shoe_details.id} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{shoe_details.name}</Typography>
        {/* <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography> */}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" >-</Button>
          {/* <Typography>&nbsp;{item.quantity}&nbsp;</Typography> */}
          <Button type="button" size="small" >+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={()=>{dispatch(remove(shoe))}}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;