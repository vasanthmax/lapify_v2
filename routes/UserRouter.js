import { Router } from "express";
import { User } from "../models/laptop";


const UserRoute = Router();
UserRoute.get("/login",(_req,res)=>{
    res.send("login");
})
UserRoute.get("/register",(_req,res)=>{
    res.send("Register");
})
UserRoute.post("/register",(req,res)=>{
    console.log(req.body)
    
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    // newUser.save((err)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         // console.log("sucessfully registered");
    //         res.send("Registered")
    //     }
    // })
    try{
        newUser.save();
    }
    catch(e){
        console.log(e)
    }
    // res.send("LOL");
})

export default UserRoute;
