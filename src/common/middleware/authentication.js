import * as tok from "../utils/security/token.service.js";
import * as dbs from "../../db/models/db.service.js";
import model from "../../db/models/model.js";
export const authantication=async(req,res,next)=>{


const {authorization}=req.headers

if (!authorization)
    throw new Error( "token not valid" ,{cause:400})
const [prefix,token]=authorization.split("")

if(prefix!="Bearer"){
     throw new Error( "token not valid" ,{cause:400})
}

    const decoded=tok.verifytok({token:authorization,seckey:"ahmed"})
    if(!decoded||!decoded?.id)
        throw new Error( "token not valid" ,{cause:400})
    req.decoded=decoded
     const { email} = req.body
        const emailexist = await dbs.findone({ model:model},{email })
        if (!emailexist) {
    
             throw new Error( "not exist profile" ,{cause:400})
           
        } 
    next()
}