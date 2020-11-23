import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import useLocalStorage from "../hooks/useLocalStorage"

const PrivateRoute = ({ component: Component, ...rest }) => {

    const [userAccessToken, setUserAccessToken] = useLocalStorage('userAccessToken', null);

    return (
        <Route {...rest} render={(props) => (
            userAccessToken
                ? <Component {...props} />
                : <Redirect to='/sign-in' />
        )} />
    )
}

export default PrivateRoute;