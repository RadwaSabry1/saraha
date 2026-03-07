import { Router } from "express";
import * as us from "./user.service.js"
import { authantication } from "../../common/middleware/authentication.js";
import { validation } from "../../common/middleware/validation.js";
import {singupschema,singInschema} from "../../modules/users/user.validations.js"
import { multer2 } from "../../common/middleware/multer.js";
import { multerenum } from "../../common/enum/user.enum.js";
const route=Router()

route.post("/signupp",multer2({array:[...multerenum.image,...multerenum.video]}).array("myfile") ,us.signup)//name of the file i was named it on postman
//route.post("/signupp",multer2({array:[...multerenum.image,...multerenum.video]}).fields([{name:"myfile",maxCount:1},
   // {name:"nfile",maxCount:2}]) 
//,us.signup)
route.post("/signin",validation(singInschema),us.signIn)
route.get("/get",authantication,us.getprofile)

export default route