import mongoose from "mongoose";


// fucntion connectDB(){

// }

const connectDatabase = () => {
    try{
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    catch(e){
        console.log(e);
    }
}

export default connectDatabase;