const router=require("express").Router()
const {createUser, getAllUsers, getUserById, updateUser, deleteUser}=require("./controller")


router.post("/",createUser)
router.get("/",getAllUsers)
router.get("/:id",getUserById)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)
module.exports=router