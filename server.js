const express = require("express");
const bodyParser = require("body-parser")
const { ApolloServer } = require("apollo-server-express")
const dbConnect = require("./config/connectDB")

// const Post = require("./models/index")
import { User, Tag, Post, Category } from "./models/index"

// import { User, Tag, Post, Category } from "./models/index"

const typeDefs = require("./schema/schema")
const resolvers = require("./resolver/resolver")

dbConnect();

// console.log(Post);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () =>({ 
    Tag,
    Post,
    Category,
    User
   })
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000}, () =>{
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})