import { error } from "node:console";
import {singupschema} from "../../modules/users/user.validations.js"

export const validation=(schema)=>{

 return (req,res,next)=>{
        let errors=[]
for (const key of Object.keys(schema)) {
        console.log(key);
        

 const {error} =schema[key].validate(req[key],{abortEarly:false})
     if(error){
       errors.push(error.details)
     }}
     if(errors.length>0){
       return res.status(404).json({message:"validation error",errors})
     }
     next()
}}