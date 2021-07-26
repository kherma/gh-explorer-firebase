import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout/MainLayout';
import RegularRoute from './RegularRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../components/pages/Home/Home';
import Dashboard from '../components/pages/Dashboard/Dashboard';

const RouteWrapper = () => (
  <Router>
    <MainLayout>
      <Switch>
        <RegularRoute exact path="/login" component={Home} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </MainLayout>
  </Router>
);

export default RouteWrapper;
