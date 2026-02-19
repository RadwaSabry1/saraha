import crypto from "node:crypto"
import { buffer } from "node:stream/consumers";
const encryptedKey=Buffer.from("12345678998765432112345678998765")
const ivlength=16;
export function encrypted(text){
    const iv=crypto.randomBytes(ivlength)
    const cipher=crypto.createCipheriv("aes-256-cbc",encryptedKey,iv)
    let encrypted=cipher.update(text,"utf-8","hex")
    encrypted+=cipher.final('hex')
    return iv.toString('hex')+":"+encrypted

}
export function decrypted(text){
const [ivhex,enctext]=text.split(":")
 const iv=buffer.from(ivhex,"hex")
    const decipher=crypto.createDeCipheriv("aes-256-cbc",encryptedKey,iv)
    let decrypted=decipher.update(enctext,"hex","utf8")
    decrypted+=decipher.final('utf8')
    return decrypted

}