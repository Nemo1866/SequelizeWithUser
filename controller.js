let {Users}=require("./connections")
let {hash, genSaltSync}=require("bcrypt")

module.exports={
    createUser:async(req,res)=>{
        let {username,email,password}=req.body
        let hashPassword=await hash(password,10)
   
        let user=await Users.create({username,email,password:hashPassword})
    if(user){

    
      res.json({
            result:"Sucessfully Added a user"
        })
    }else{
        res.json({
            error:"Some Error Occured"
        })
    }
        

    },
    getAllUsers:async(req,res)=>{
        let users=await Users.findAll({})
        res.json({
            result:users
        })
    },
    getUserById:async(req,res)=>{
        let user=await Users.findOne({id:req.params.id})
        res.json({
            result:user
        })
    },updateUser:async(req,res)=>{
        let body=req.body
        let updateUser=await Users.update(body,{where:{id:req.params.id}})
        if(updateUser){
        res.json({
            result:"Sucessfully Saved in the Database"
        })
    }else{
        res.json({
            Error:"Some error Occured"
        })
    }

    },deleteUser:async(req,res)=>{
        let deleteUser=await Users.destroy({where:{id:req.params.id}})
        if(deleteUser){
            res.json({
                message:"Deleted From the Database"
            })
        }else{
            res.json({
                "Error":"No Record Found"
            })
        }
    }
}