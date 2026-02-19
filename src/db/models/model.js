import mongoose from "mongoose";
import * as en from "../../common/enum/user.enum.js"
const schema=mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlenght:3,
        maxlenght:5,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        minlenght:3,
        maxlenght:5,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true

    },
    password:{
        type:String,
        required:function(){
            return this.providor==en.providerenum.google?false :true
        },
        trim:true,
        minlenght:6
    }
    ,age:Number,
    gender:{
        type:String,
        enum:Object.values(en.genderenum),
        default:en.genderenum.male
    },
    profilepic:String,
    confirmed:Boolean,
    providor:{
        type:String,
        enum:Object.values(en.providerenum),
        default:en.providerenum.system
    },
    role:{
        type:String,
        enum:Object.values(en.roles),
        default:en.providerenum.user
    }
},{
    timestamps:true,
    strictQuery:true,
    toJSON:{virtuals:true}

})
schema.virtual("fullname").get(function(){
    return this.fname+""+this.lname
}).set(function(v){
    this.fname=v.split("")[0]
    this.lname=v.split("")[1]
})
const model=mongoose.model.user||mongoose.model("user",schema)
export default model