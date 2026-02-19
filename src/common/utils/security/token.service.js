import jwt from "jsonwebtoken"
export const verifytok=({token,seckey,options={}}={})=>{
    
        return jwt.verify(token,seckey,options)
}
export const signtoken=({payload,seckey,options={}}={})=>{
    
        return jwt.sign(payload,seckey,options)
}