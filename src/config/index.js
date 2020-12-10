export default {
    region:process.env.REACT_APP_REGION,
    cognito: {
        user_pool_id: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        app_client_id: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
        domain: process.env.REACT_APP_COGNITO_DOMAIN,
        callback_url: process.env.REACT_APP_COGNITO_CALLBACK_URL
    },
    appSync:{
        graphql_endpoint: process.env.REACT_APP_APPSYNC_GRAPHQLENDPOINT,
        auth_type: process.env.REACT_APP_APPSYNC_AUTH_TYPE,
        api_key: process.env.REACT_APP_APPSYNC_APIKEY,
    }
};