const resolvers = {
  // QUERY(GET)
  Query:{
    posts: async(parent, agrs, { Post }) => {
      return await Post.find()
    },
    tags: async(parent, agrs, { Tag }) => {
      return await Tag.find()
    },
    categorys: async(parent, agrs, { Category }) => {
      return await Category.find()
    }
  },
  Mutation:{
    createPost: async (parent, args, { Post }) => {
      const newPost = new Post(args)
      return await newPost.save()
    },
    createTag: async (parent, args, { Tag }) => {
      return await Tag.save(args)
    },
    createCategory: async (parent, args, { Category }) => {
      return await Category.save(args)
    },
    deletePost: async (parent, args, { Post }) =>{
      try{
        console.log(args.id)
        await Post.deleteOne({ _id: args.id })
        return "Delete Success!"
      } 
      catch(err){
        console.log(err)
        return "Delete Failed!"
      }
      
    },
    deleteTag: async (parent, args, { Tag }) =>{
      try{
        console.log(args.id)
        await Tag.deleteOne({ _id: args.id })
        return "Delete Success!"
      } 
      catch(err){
        console.log(err)
        return "Delete Failed!"
      }
      
    },
    deleteCategory: async (parent, args, { Category }) =>{
      try{
        console.log(args.id)
        await Category.deleteOne({ _id: args.id })
        return "Delete Success!"
      } 
      catch(err){
        console.log(err)
        return "Delete Failed!"
      }
      
    },
    updatePost: async (parent, args, { Post}) =>{
      try{
        console.log(args.id)
        const query = {
          _id: args.id
        }
        await Post.update(query,{
          title: args.title,
          content: args.content,
          userID: args.userID, 
          categoryId: args.categoryId
        })
        return "Update Successed!"
      } 
      catch(err){
        console.log(err)
        return "Update Failed!"
      }
    }
    
  }
}

module.exports = resolvers;