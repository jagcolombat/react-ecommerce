import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Stock from './components/Stock'
import NewProduct from "./components/FormProduct";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/stock" component={Stock}/>
                    <Route path="/add-prod" component={NewProduct}/>
                </Switch>
            </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
