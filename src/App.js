import React from 'react';
import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar  from "./component/Navbar.js";
import ListProduct  from "./component/ListProduct.js";
import Counter from './component/Counter/Counter.js'

function App() {


  const [number, setnumber] = useState(0)

  function minus () {
    if(number == 0)return
    setnumber(number-1)
  }
  
  function plus () {
    setnumber(number+1)
  }


  return (
    <Router>
        <div >


          <Navbar/>


        <Switch>
          <Route exact path="/">
            <h1>Exercise 1 - Create Counter</h1>
            <Counter number={number} minus={minus} plus={plus}/>          
          </Route>
          
          <Route path="/product">
            <h1>Exercise 2 - Product Item List</h1>
            
            <ListProduct />
          </Route>
        </Switch>

          
        
        
       


        </div>
    </Router>
  );
}







export default App;
