import { Router } from "express";
import * as us from "./user.service.js"
const route=Router()
route.post("/signupp",us.signup)
route.post("/signin",us.signIn)
route.get("/get",us.getprofile)

export default route