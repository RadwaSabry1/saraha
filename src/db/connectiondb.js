import mongoose from "mongoose"
export const checkconnection=async()=>{
try{
    await mongoose.connect("mongodb://localhost:27017/saraha")
    console.log("done check");
    

}catch(error){
    console.log("failed to connect",error);
}

}