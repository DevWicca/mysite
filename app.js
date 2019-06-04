const express = require('express')
const mongoose = require('mongoose')
const config =require('config')
const graphqlHTTP =require('express-graphql')
const schema =require('./schema/schema')
const cors =require('cors')
const path = require('path')
const compression = require("compression");
// import  Routes
const ItemRoutes = require('./Routes/api/items')
const UsersRoutes = require('./Routes/api/user')
const AuthRoutes = require('./Routes/api/auth')


//app init
const app = express()


const DBURi = config.get('mangoURI')
mongoose.connect(DBURi,{ useNewUrlParser: true,
useCreateIndex: true },
() => {console.log('Data Base Is Open for You Baby ^_^')})

//middlewaress
app.use(express.json())
app.use(cors())

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

pp.use(compression({
    level:6,
    filter:shouldCompress
}))

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))


// Routes
app.use('/api/items',ItemRoutes)
app.use('/api/user',UsersRoutes)
app.use('/api/auth',AuthRoutes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'))
    a

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

module.exports = app
