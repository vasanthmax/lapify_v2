const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/task1', { useNewUrlParser: true, useUnifiedTopology: true });

const lapSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const Laptop = mongoose.model("Laptop", lapSchema);


const laptop = new Laptop({
    name:"Lenovo",
    rating:8
});

laptop.save();

const asus = new Laptop({
    name:"Asus",
    rating:"7",
    review:"good for gaming"
});
const dell = new Laptop({
    name:"Dell",
    rating:"9",
    review:"pretty good to use"
});
const hp = new Laptop({
    name:"HP",
    rating:"8.5",
    review:"A good touch to feel the lap"
});

Laptop.insertMany([asus,dell,hp], function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Sucessful")
    }
});





