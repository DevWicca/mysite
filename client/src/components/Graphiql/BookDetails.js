import React, { Component } from 'react';
import {graphql, withApollo} from 'react-apollo'
import {getBookQuery,deletedbookid} from '../Graphiql/queries/queries'
import { Button,Icon } from "react-materialize"

class BookDetails extends Component {
    
    onClickhendel=()=> {
        let id = this.props.data.book.id
        this.props.client.mutate({
        mutation:deletedbookid,
          variables: {id},
        })
        window.location.reload()

      }
   

    displayBookDetails(){
        const {book} =this.props.data;
        if(book){
            return(
                <div className="center">
                    <h2 className="center"><strong>Book Name: </strong>{book.name}</h2>
                    <p><strong>Book Genre: </strong>{book.genre}</p>
                    <p><strong>Author Name: </strong>{book.author.name}</p>
                    <Button onClick={this.onClickhendel} waves="light" style={{marginRight: '5px'}} className="black">
                        Delete This Book
                        <Icon right>
                        send
                        </Icon>
                    </Button>
                    <h3>All Books by this Author</h3>
                    <ul className="othor-books">
                    {
                        book.author.books.map(item =>{
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                    </ul>
                </div>
            )
        }else{
            return (
                <div>No Book Selected</div>
            )
        }
    }
    render() {
        return (
            <div className="center" id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default withApollo (
    graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetails))