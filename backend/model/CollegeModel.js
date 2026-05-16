const mongoose=require("mongoose");

const collegeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    code:{type:String, unique:true,required:true},
    address:{type:String,required:true},
    departments:{type:Array,required:true},
    email:{type:String,unique:true,required:true},
    url:{type:String,unique:true,required:true},

},{timestamps:true});

const collegeModel=mongoose.model("colleges",collegeSchema);

module.exports=collegeModel;