const {addCollege,getAllColleges,updateEmail,deleteCollege,getCollegeBasedOnId,updateCollegeDetails}=require("../controller/collegeController");

const express=require("express");
const router=express.Router()

router.post("/add-college",addCollege);
router.get("/get-colleges",getAllColleges);
router.delete("/delete-college/:id",deleteCollege);
router.get("/get-college/:id",getCollegeBasedOnId)
router.put("/update-college/:id",updateCollegeDetails)
router.patch("/update-email/:email",updateEmail)
module.exports=router;