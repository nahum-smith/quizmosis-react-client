import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const API_URI = 'http://localhost:3300/graphql'
const client = new ApolloClient({
  link: new HttpLink({
    uri: API_URI,
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache()
})

// client.query({
//   query: gql`{
//           users {
//             userID
//             email
//             password
//             ani
//             status
//             createdAt
//             updatedAt
//           } }` })
// .then(data => console.log(data.data.users[0]))
// .catch(console.log)

const configuredStore = configureStore()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configuredStore}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'))
registerServiceWorker()
