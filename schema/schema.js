const graphql = require('graphql')
const _= require('lodash')
const Book =require('../models/book')
const Author =require('../models/author')

const { GraphQLObjectType ,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLNonNull
    } = graphql





const BookType = new GraphQLObjectType ({
    name: 'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                return Author.findById(parent.author)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType ({
    name: 'Author',
    fields:() => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return Book.find({author:parent.id})
            }
        }
    })
})


const RootQuery =new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db/ other source
                return Book.findById(args.id)
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Author.findById(args.id)

            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                async function leemt() {
                    let fixxnd;
                    try {
                        fixxnd = await Book.find({}).then(res => res)
                      } catch(e) {
                        return e
                      }
                      try {
                          if (fixxnd.length > 15 ){
                        await Book.findByIdAndDelete(fixxnd[8]._id).then(res => res)
                        }
                      } catch(e) {
                        return e
                      }
                }
                leemt()
                 return Book.find({})
            }
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                // return authors
                return Author.find({})
            }
        }
    }
})

const Mutation =new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent,args){
                let author = new Author({
                    name:args.name,
                    age:args.age
                })
                return author.save()
            }
        },
        addBook:{
            type:BookType,
            args:{
                name:{type:    new GraphQLNonNull(GraphQLString)},
                genre:{type:   new GraphQLNonNull(GraphQLString)},
                authorId:{type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){

                if(!args.genre == '' && !args.name == '' && !args.authorId == ""){
                    let book =new Book({
                        name:args.name,
                        genre:args.genre,
                        author:args.authorId
                    })
                    return book.save()
                }else{
                    return
                    
                }
                
            }
        },
        deletedbook:{
            type:BookType,
            args:{
                bookid:{type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){

                if(!args.bookid == ""){
                   
                    return Book.findByIdAndDelete(args.bookid)
                }else{
                    return
                    
                }
                
            }
        }
    }
    
})

module.exports= new GraphQLSchema ({
    query:RootQuery,
    mutation:Mutation
})