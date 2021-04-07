import mongoose from "mongoose";

const LaptopSchema = mongoose.Schema({
    name:
    {type: String, required:true},
    rating:
    {type: Number, required:true}
})

const UserSchema = mongoose.Schema({
    email:
    {type: String , required:true},
    password:
    {type: String,required:true}
})

const laptop = mongoose.model('laptop', LaptopSchema);
const User = mongoose.model("User", UserSchema);
export{laptop,User};