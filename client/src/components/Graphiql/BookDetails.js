import React, { Component } from 'react';
import {graphql} from 'react-apollo'
import {getBookQuery} from '../Graphiql/queries/queries'

class BookDetails extends Component {
    displayBookDetails(){
        const{book} =this.props.data;
        if(book){
            return(
                <div>
                    <h2><strong>Book Name: </strong>{book.name}</h2>
                    <p><strong>Book Genre: </strong>{book.genre}</p>
                    <p><strong>Author Name: </strong>{book.author.name}</p>
                    <p>All Books by this Author</p>
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
        console.log(this.props)
        return (
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetails);
