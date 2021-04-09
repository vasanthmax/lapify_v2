import { Router } from "express";
import { User } from "../models/laptop";


const UserRoute = Router();
UserRoute.get("/login",(_req,res)=>{
    res.send("login");
})
UserRoute.get("/register",(_req,res)=>{
    res.send("Register");
})
UserRoute.post("/register",(req,_res)=>{
   // console.log(req.body)
    
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
});

UserRoute.post("/login", (req,res)=>{
    
    const email= req.body.username;
    const password= req.body.password;
    
    User.findOne({email:email},(err,foundUser)=>{
        console.log(req.body)
        if(err){
            console.log(err);
        }
        else{
            if(foundUser){
                if(foundUser.password=== password){
                    res.send("successfully login")
                }
            }
        }
    })

});

export default UserRoute;
