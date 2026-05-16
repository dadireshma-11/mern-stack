const mongoose=require("mongoose");


const studentSchema=new mongoose.Schema({
    name:{type:String , required:true},
    rollno:{type:String, unique:true},
    branch:{type:String, required:true},
    phone:{type:Number, unique:true, required:true,length:10},
    email:{type:String,unique:true,required:true},
    address:{type:String, required:true}
},
{timestamps:true}
);

const studentModel=mongoose.model("students",studentSchema)


module.exports=studentModel;