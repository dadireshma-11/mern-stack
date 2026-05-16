const mongoose = require("mongoose");

const connection=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/bits");
    console.log("DB connected successfully");
    } catch (error) {
        console.log("failed to connect");
        
    }
    
}

module.exports=connection;