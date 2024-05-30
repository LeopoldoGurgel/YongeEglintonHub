import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./components/HeaderComponent"
import {NewsProvider} from '../ultils/newsContext.jsx';
import Footer from './components/Footer';
import './App.css'
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { Outlet } from 'react-router-dom'; 
import { setContext } from '@apollo/client/link/context';
import { QUERY_BREAKING, QUERY_ENTERT, QUERY_SPORTS } from '../ultils/queries.js';
import { UPDATE_BREAKING, UPDATE_ENTERTAINMENT, UPDATE_SPORTS } from "../utils/actions";

const httpLink = createHttpLink({
  uri: 'https://pseudocoders-server-5222d68eaaf3.herokuapp.com/graphql'
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <NewsProvider>
        <div className='bg-light'>
          <HeaderComponent />
          <Outlet />
          <Footer />
        </div>
      </NewsProvider>      
    </ApolloProvider>
  )
}

export default App

    // create main group and side group components
    // create article search engine. 
    // figure out a way to develop an AI chatbot to discuss about articles.
