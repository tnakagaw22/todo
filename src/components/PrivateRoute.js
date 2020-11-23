import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn: isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to='/sign-in' />
    )} />
  )

  export default PrivateRoute;