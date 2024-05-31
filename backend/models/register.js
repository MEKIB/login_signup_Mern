const mongoose=require("mongoose")
const registerschema=new mongoose.Schema({
    name:Array,
    email:Array,
    password:Array
})
const registerModel=mongoose.model("students",registerschema)
module.exports=registerModel