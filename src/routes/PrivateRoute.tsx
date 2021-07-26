import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { selectIsUserSignedIn } from '../app/authSlice';
import { useAppSelector } from '../app/hooks';

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const isUserSignedIn = useAppSelector(selectIsUserSignedIn);
  return isUserSignedIn ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
