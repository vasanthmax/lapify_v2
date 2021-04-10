import { Router } from "express";
import { User } from "../models/laptop";


const userRoute = Router();
userRoute.get("/login", (_req, res) => {
    res.send("login");
})
userRoute.get("/register", (_req, res) => {
    res.send("Register");
})
userRoute.post("/register", (req, _res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    try {
        newUser.save();
    }
    catch (e) {
        console.log(e)
    }
});

userRoute.post("/login", (req, res) => {

    const email = req.body.username;
    const password = req.body.password;

    User.findOne({ email: email }, (err, foundUser) => {
        console.log(req.body)
        if (err) {
            console.log(err);
        }
        else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.send("successfully login")
                }
            }
        }
    })

});

export default userRoute;
