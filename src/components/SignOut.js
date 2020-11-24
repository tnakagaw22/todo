import React from "react";
import { Button } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

import useLocalStorage from "../hooks/useLocalStorage"

const SignOut = (props) => {
    const [userAccessToken, setUserAccessToken] = useLocalStorage('userAccessToken', null);
  
    const handleSignOut = () => {
        setUserAccessToken(null);
        window.location.href = "/sign-in";
    }

    return (
        <>
        <div style={{textAlign:"right"}}>
        <Button
                startIcon={<ExitToApp />}
                onClick={handleSignOut}
                color="inherit"
            >
                sign out
      </Button>
        </div>
        </>
    )
}

export default SignOut;