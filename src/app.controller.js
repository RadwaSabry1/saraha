import express from "express"
import { checkconnection } from "./db/connectiondb.js"

import route from "./modules/users/user.controller.js"
const app=express()
const port=2000
const bootstrap=()=>{
    app.use(express.json())
    app.get("/",(req,res)=>{
        res.status(200).json({message:`running on  ${req.originalUrl}`})
    })
     app.use("/users",route)
    app.use("{/*m}",(req,res)=>[
        res.status(404).json({message:`couldnt open this url  ${req.originalUrl}`})
    ])
    checkconnection().then(()=>{
        console.log("check db done");
        
    }).catch((error)=>[
        console.log(`error on ${console.error()}`)
        
    ])
   

app.use((error, req, res, next) => {
    res.status(error.cause || 500).json({
        message: error.message,
        error: error.stack
    })
})


 app.listen(port,()=>{
        console.log(`server is running into port : ${ port}`);
        
    })


}

export default bootstrap
