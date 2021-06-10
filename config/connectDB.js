import mongoose from "mongoose"
import config from "./config.json"


let dbConnect =  async () => {
  try {
    await mongoose.connect(`mongodb+srv://${config.username}:${config.password}@${config.database}.pfmwb.mongodb.net/Cluster0?retryWrites=true&w=majority`,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log("DATABASE CONNECTING...")

  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect