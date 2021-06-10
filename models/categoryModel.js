import mongoose from "mongoose"

let Schema = mongoose.Schema;

let categorySchema = new Schema({
  categoryName: {
    type: String
  },
  description: {
    type: String
  },
  postId: {
    type: Number
  },
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: Date.now },
  deletedAt: {type: Number, default: null}
})

module.exports = mongoose.model("category", categorySchema);