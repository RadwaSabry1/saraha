import { Router } from "express";
import * as us from "./user.service.js"
const route=Router()
route.post("/signup",us.signup)
route.post("/signup/role",us.signup)


export default route