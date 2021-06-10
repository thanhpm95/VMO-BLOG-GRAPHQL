import mongoose from "mongoose"

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  fullName:{
    type: String
  },
  age:{
    type: Number
  },
  type:{
    type: Number
  },
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: Date.now },
  deletedAt: {type: Number, default: null}
})

module.exports = mongoose.model("user", userSchema);