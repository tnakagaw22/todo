import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify, { API, graphqlOperation }  from 'aws-amplify'
import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from './aws-exports'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Rehydrated } from 'aws-appsync-react'

import config from "./config";

Amplify.configure(AppSyncConfig);
Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.region,
    userPoolId: config.cognito.user_pool_id,
    userPoolWebClientId: config.cognito.app_client_id,
  }
})

// const client = new AWSAppSyncClient({
//   url: config.appSync.graphql_endpoint,
//   region: config.region,
//   auth: {
//     type: config.appSync.auth_type,
//     apiKey: config.appSync.api_key,
//     // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
//   }
// })
  
// const WithProvider = () => (
//   <ApolloProvider client={client}>
//     <ApolloHooksProvider client={client}>
//       <Rehydrated>
//         <App />
//       </Rehydrated>
//     </ApolloHooksProvider>
//   </ApolloProvider>
// )

ReactDOM.render(
  <React.StrictMode>
    {/* <WithProvider /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
