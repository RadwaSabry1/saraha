import {hashSync,compareSync}from "bcrypt"
export const hashing=({plaintext,saltrounr=12}={})=>{
return hashSync(plaintext,saltrounr)
}
export const compare=({plaintext,citext}={})=>{
return compareSync(plaintext,citext)
}