import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItem from "./Components/Productitem";
import NavBar from "./Components/NavBar";



function RouterConfig() {
  return (
      
    <div>
       
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact  path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route path="/product/:id" component={ProductItem}></Route>
          <Route path="*" component={()=> <h4>404 Not found</h4>}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;