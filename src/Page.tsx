import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import NotFound from './component/pages/notFound'
import Login from './component/pages/Login'

const BasicRoute = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
      </Switch>
  </Router>
);


export default BasicRoute;