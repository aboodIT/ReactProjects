import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux'
import { add } from './BasketSlice';


export const shoes = {
  'air-jordan-3-valor-blue': {
    name: 'VALOUR BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 200,
    description:
      'VALOUR BLUE will make you look becoming and give you a sense of pride and satisfaction, and will give you a sense of comfort and relief.',
  },
  'jordan-mars-270-london': {
    name: 'JORDAN MARS 270 LONDON',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 250,
    description:
      'JORDAN MARS 270 LONDON will take you from season to season with effortless style and will make your feet feel in heaven.',
  },
  'air-jordan-1-zoom-racer-blue': {
    name: 'RACER BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 300,
    description:
      'RACER BLUE will give you all the comfort with the cushioning support of a running shoe.',
  },
  'jordan-mars-274-london': {
    name: 'JORDAN MARS 270 ',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 250,
    description:
      'JORDAN MARS 270 LONDON will take you from season to season with effortless style and will make your feet feel in heaven.',
  },

  'jordan-mars-280-london': {
    name: 'JORDAN MARS 270 ',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 250,
    description:
      'JORDAN MARS 270 LONDON will take you from season to season with effortless style and will make your feet feel in heaven.',
  },
}


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height:'20%'
  },
  link: {
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 50,
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


export function Product() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div style={{margin:15}}>
      <h1>Products</h1>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {Object.entries(shoes).map(
          ([id, { name, img, price}]) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
              {/* <Link to={`/product/${id}`} key={id} className={classes.link}> */}
              <Card className={classes.root}>
                <Link to={`/product/${id}`} key={id} className={classes.link}>
                  <CardMedia className={classes.media} image={img} title={name} />
                </Link>
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h6">
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      ${price}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label="Add to Cart" onClick={()=>{dispatch(add(id))}}>
                    <AddShoppingCart />
                  </IconButton>
                </CardActions>
              </Card>
              {/* </Link> */}
            </Grid>)
        )}
      </Grid>
    </div>
  );
}
