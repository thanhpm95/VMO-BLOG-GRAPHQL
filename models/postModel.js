import mongoose from "mongoose"

let Schema = mongoose.Schema;

let postSchema = new Schema({
  title:{
    type: String
  },
  content: {
    type: String
  },
  userID: {
    type: Number
  },
  categoryId:{
    type: Number
  },
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: Date.now },
  deletedAt: {type: Number, default: null}
})

// console.log(postSchema);

module.exports = mongoose.model("post", postSchema);