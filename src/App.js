import React from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.js'
// import Login from './components/Login/Login.js'
import './App.css';

export default function Main() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={App}/>
              {/* <Route exact path="/login" component={Login}/> */}
            </Switch>
            <App/>
          </header>
        </div>
      </BrowserRouter>
  );
}
