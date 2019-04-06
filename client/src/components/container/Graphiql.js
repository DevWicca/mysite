import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

// Components
import BookList from '../Graphiql/BookList'
import AddBook from '../Graphiql/AddBook'


// Apollo client setup 
const client = new ApolloClient({
  uri:'/graphql'
})
class Graphiql extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main graphiql">
          <h1>Wicca Reading List</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default Graphiql;
