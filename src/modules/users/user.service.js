import { providerenum } from "../../common/enum/user.enum.js";
import { successresponse } from "../../common/utils/response.success.js";
import { model } from "../db/models/model.js" ;
import * as d from "../db/models/db.service.js"

export const signup = async (req, res, next) => {

    const { fname, lname, email, password, age, gender } = req.body
    
    if (await model.findOne({ email })) {
       throw new Error("already exist",{cause:404});
         
       
    }
    const user = await model.create({ fname, lname, email, password, age, gender })
   successresponse(res,{data:user})



}
//const asynchandler=(fn)=>{
   // return (req,res,next)=>{
       // fn(req,res,next).catch((error)=>{
            //next(error)
        //})

   // }
//}



export const signIn = async (req, res, next) => {

    const { email, password } = req.body
    const emailexist = await d.findone({ model:model},{email,provide:providerenum.system })
    if (emailexist) {
        return res.status(201).json({ message: "email done" })
    } else{
        res.status(400).json({ message: "not exist try to signup" })
    }
    if (password != emailexist.password)
        return res.status(401).json({ message: "invalid password try again please" })
    
}