import { providerenum } from "../../common/enum/user.enum.js";
import { successresponse } from "../../common/utils/response.success.js";
import  model  from "../../db/models/model.js" ;
import * as d from "../../db/models/db.service.js"
import { encrypted } from "../../common/utils/security/encrypt.security.js";
import { hashing } from "../../common/utils/security/hash.security.js";
import jwt from "jsonwebtoken";
//import { v4 }  from "uuid";
import * as tok from "../../common/utils/security/token.service.js"

export const signup = async (req, res, next) => {

    const { fname, lname, email, password, age, gender } = req.body
    
    if (await model.findOne({ email })) {
       throw new Error("already exist",{cause:404});
         
       
    }

    const user = await model.create({ fname, lname, email, password, age, gender })
    
   successresponse({res,message:"success",data:{accesstoken}})



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
    const emailexist = await d.findone({ model:model},{email })
    if (!emailexist) {

         throw new Error( "not exist try to signup" ,{cause:400})
       
    } else{
        const accesstoken=tok.signtoken ({payload:emailexist.id,seckey:"ahmed"})
         res.status(201).json({ message: "email done" ,accesstoken})
    }
    if (password != emailexist.password)
        return res.status(401).json({ message: "invalid password try again please" ,data:{fname:encrypted(fname),password:hashing({plaintext:password,saltrounr:10})}})
    
}


export const getprofile=async(req, res, next)=>{
     const { email} = req.body
    const {authorization}=req.headers
    const decoded=tok.verifytok({token:authorization,seckey:"ahmed"})
    const emailexist = await d.findone({ model:model},{email })
    if (!emailexist) {

         throw new Error( "not exist profile" ,{cause:400})
       
    } else{
          successresponse({res,message:"success",data:decoded})
    }
  

}