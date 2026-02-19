import { verifytok } from "../utils/security/token.service.js";
export const {authorization}=req.headers

if (!authorization)
    throw new Error( "token not valid" ,{cause:400})

    const decoded=tok.verifytok({token:authorization,seckey:"ahmed"})
    if(!decoded||!decoded?.id)
        throw new Error( "token not valid" ,{cause:400})