import mongoose from "mongoose"

let Schema = mongoose.Schema;

let userTokenSchema = new Schema({
  userId: {
    type: Number,
  },
  token:{
    type: String,
  },
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: Date.now },
  deletedAt: {type: Number, default: null}
})

module.exports = mongoose.model("userToken", userTokenSchema);