import mongoose from "mongoose";

const LaptopSchema = mongoose.Schema({
    name:
    {type: String, required:true},
    rating:
    {type: Number, required:true}
})

const laptop = mongoose.model('laptop', LaptopSchema);
export default laptop;