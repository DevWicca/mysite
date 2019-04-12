import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {Container, Button} from "react-materialize"
import {Link} from "react-router-dom"

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
        <Container className="main graphiql">
          <h1 className="center">Graphql Book List</h1>
          <Link  to="/"><Button className=' teal'>home</Button></Link>
          <BookList/>
          <AddBook/>
        </Container>
      </ApolloProvider>
    );
  }
}

export default Graphiql;
