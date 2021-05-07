import React from "react";
import { Product } from './Products.js';
import Home from './Home.js';
import ProductDescription from './ProductDescription.js';
import Basket from './Basket';
import Checkout from './Checkout';
import { AddShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
}));


export function Routes() {

  const classes = useStyles();

  return (
    <Router >
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Link style={{ color: 'white', marginRight: 10 }} to="/"><Typography variant="h6" >
                Home
              </Typography></Link>
              <Link className={classes.title} to="/Product"><Typography variant="h6" >
                Product
              </Typography></Link>
              <Link to='/Basket'>
                <IconButton aria-label="Add to Cart" >
                  <AddShoppingCart />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/basket" component={Basket} />
          <Route path="/product/:id" component={ProductDescription} />
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}