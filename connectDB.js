


// fucntion connectDB(){

// }

const connectDatabase = () => {
    try{
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    catch{
        console.log("could not connect properly");
    }
}

export default connectDatabase;