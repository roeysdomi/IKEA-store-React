
import './css/App.css';
import Bar from './bar'
import React, {useState} from 'react';
import useFetch from './useFetch'
import Mainx from './main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createServer } from "cors-anywhere";
import Singlepro from './pages/singleproduct'
import Checkout from './pages/checkout'
function App() {




  return (
    <>
    <Router>
        <Bar/>
          <Switch>
            <Route exact path="/">
              <Mainx number={0}/>
            </Route>
            <Route  path="/product/:id">
              <Singlepro/>
            </Route>
            <Route  path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
      </Router>



    </>
  );
}

export default App;
