export default {
    region:process.env.REACT_APP_REGION,
    cognito: {
        user_pool_id: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        app_client_id: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
        domain: process.env.REACT_APP_COGNITO_DOMAIN,
        callback_url: process.env.REACT_APP_COGNITO_CALLBACK_URL
    }
};