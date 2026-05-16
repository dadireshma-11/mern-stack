const Colleges=require("../model/CollegeModel");

//add college
const addCollege=async (req,res)=>{
    try {
      const {name,code,address,departments,email,url}=req.body;

      const newCollege={
        name:name,
        code:code,
        address:address,
        departments:departments,
        email:email,
        url:url
      }
        await Colleges.insertOne(newCollege);

         res.status(200).json({message:"New college recprd added successfully"})
   } catch (error) {
      res.status(500).json({message:"failed to add college record"})

  }
};

// get all college details

const getAllColleges=async(req,res)=>{
    try {
        const foundColleges= await Colleges.find();
        if(foundColleges.length==0){
        return res.status(404).json({messages:"colleges not found"})
        } res.status(200).json({foundColleges})
        
    }catch (error) {
        res.status(500).json({message:"Failed to retrieve data"})
    }
}

// delete college details

const deleteCollege=async(req,res)=>{
    try{
        const deleteDocument=await Colleges.findByIdAndDelete(req.params.id);
        console.log(deleteDocument);

        res.status(200).json({message:"Record delete successfully"})
    }catch (error){
        res.status(500).json({message:'failed to delete'})
    }
}


// update college based on code
const getCollegeBasedOnId=async(req,res)=>{
    try {
        const foundColleges =await Colleges.findById(req.params.id);
        res.status(200).json({foundColleges});
    }catch (error){
        res.status(500).json({message:"Failed to get college details"});

    }
}

// upate college details
const updateCollegeDetails=async(req,res)=>{
    try {      
        const updateCollege = await Colleges.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true},
        )
         res.status(200).json({message:"updated successfully"})   
    
    } catch (error) {   
        res.status(500).json({ message: "Failed to update college details" });
    }
}

// update college mail 
const updateEmail=async(req,res)=>{
    try{
        const UpdateEmail=await Colleges.findOneAndUpdate(
        {
            email:req.params.email,
        },
         {email:req.body.email},
         {new:true},
        );
        res.status(200).json({message:"updated successfully"}) 
    }catch (error) {
        res.status(500).json({message:"failed to update email.."})
    }
}

module.exports={addCollege,getAllColleges,updateEmail,deleteCollege,getCollegeBasedOnId,updateCollegeDetails};