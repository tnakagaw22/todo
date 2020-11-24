import React from "react";
import { useLocation } from 'react-router-dom';

import useLocalStorage from "../hooks/useLocalStorage"


const AuthCallback = (props) => {
    const [userAccessToken, setUserAccessToken] = useLocalStorage('userAccessToken', null);

    const query = new URLSearchParams(useLocation().search);
    setUserAccessToken(query.get("code"));
    window.location.href = "/";
}

export default AuthCallback;