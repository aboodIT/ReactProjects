import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const UseStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
  });

const singleProduct = ({ id,name,img,price}) => {
  const classes = UseStyles();


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default singleProduct;