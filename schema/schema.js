const { gql } = require('graphql-tag')

const typeDefs = gql`
  type Tag{
    id: ID!
    tagName: String
    description: String
    post: Post
  }

  type Category{
    id: ID!
    categoryName: String
    description: String
    post: Post
  }

  type Post{
    id: ID!
    title: String
    content: String
    user: User
    category: Category
  }

  type User{
    id: ID!
    username: String
    password: String
    fullName: String
    gender: Int
    type: Int
    post: Post
  }

  #ROOT TYPE
  type Query{
    tags: [Tag]
    tag(id: ID!): Tag
    categorys: [Category]
    category(id: ID!): Category
    posts: [Post]
    post(id:ID!): Post
    users: [User]
    user(id: ID!): User
  }

  type Mutation{
    createTag(tagName: String!, description: String, post: ID!): Tag,
    deleteTag(id: String!): String,
    createCategory(categoryName: String!, description: String, post: ID!): Category,
    deleteCategory(id: String!): String
    createPost(title: String!, content: String, userID: ID!, category: ID!): Post,
    deletePost(id: String!): String,
    updatePost(id: String!, title: String!, content: String, user: ID!, category: ID!): String,
    updateTag(id: String!, tagName: String!, description: String, post: ID!): String,
    updateCategory(id: String!, categoryName: String!, description: String, category: ID!): String,
  }

`

module.exports = typeDefs