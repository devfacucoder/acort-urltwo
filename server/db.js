import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.URL_DB).then(()=>{
    console.log("Base de datos conectada")
}).catch((err)=>console.log(err))
export default mongoose;