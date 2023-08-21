import mongoose from "mongoose";

const Connection = async()=>{
   const DB_URL = "mongodb://gofood:Sonam123456@ac-n8nt7yj-shard-00-00.ftqt7pt.mongodb.net:27017,ac-n8nt7yj-shard-00-01.ftqt7pt.mongodb.net:27017,ac-n8nt7yj-shard-00-02.ftqt7pt.mongodb.net:27017/?ssl=true&replicaSet=atlas-ukvlkv-shard-0&authSource=admin&retryWrites=true&w=majority";
    try {
       await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log("database connected successfully")
    } catch (error) {
      console.log(error);  
    }
}
export default Connection;