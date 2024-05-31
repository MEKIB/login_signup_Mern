const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json()).toString()
const registerModel=require('./models/register')
mongoose.connect("mongodb://localhost:27017/signup")
.then(res=>console.log("the database is connected"))

app.post('/register',(req,res)=>{
   registerModel.create(req.body)
   .then(students=>res.json(students))
   .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body
    registerModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("successs")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("no record existed")
        }
    })
})
// app.get('/getusers',(req,res)=>{
//     registerModel.find({})
//     .then(function(users){
//         res.json(users)
//     })
//     .catch(function(err){
//         console.log(err)
//     }
// )  
// })
app.listen(3000,()=>{
    console.log("the server is running")
})

