import React from 'react'
import Link from '@material-ui/core/Button';
import Icon from './GoogleIcon';
import config from "../../config";

const GoogleLoginButton = (props) => {


    return (
        <>
            <Link
                {...props}
                href={`${config.cognito.domain}/login?response_type=code&client_id=${config.cognito.app_client_id}&redirect_uri=${config.cognito.callback_url}`}
            >
                <Icon />
                Continue with Google
            </Link>
        </>
    )
}

export default GoogleLoginButton;