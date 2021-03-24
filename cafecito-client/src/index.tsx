import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/add">
        //Add component should be here
        <App />
      </Route>
      <Route exact path="/edit/:id">
        //Edit component should be here
        <App />
      </Route>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
