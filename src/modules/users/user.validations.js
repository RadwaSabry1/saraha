import Joi from "joi";
import { Query } from "mongoose";
export const singupschema= {
   body:Joi.object({
      fname:Joi.string().required(),
        email:Joi.string().required()
        , password:Joi.string().required()
     }),
     Query:Joi.object({
        x:Joi.string().required()
     })
   }
     export const singInschema={
      body:Joi.object({
        email:Joi.string().required()
        , password:Joi.string().required()
     }).required(),
     query:Joi.object({
       x:Joi.string().required()
     }).required()
     }