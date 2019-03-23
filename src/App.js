import React, { Component } from 'react';
import  History  from './history';
import { Router,Route,Switch,Redirect } from 'react-router-dom'
import RegisterPage from './components/register/register';
import FirstPage from './components/firstpage/firstpage';
import LoginPage from './components/login/login';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>

          <Route exact path='/' 
            render={ ()=>(<RegisterPage />) }>
          </Route>

          <Route exact path='/LoginPage' 
            render={ ()=>(<LoginPage />) }>
          </Route>

          <Route exact path='/FirstPage' 
            render={ ()=>(<FirstPage />) }>
          </Route>
          
        </Switch>

      </Router>
    );
  }
}

export default App;
