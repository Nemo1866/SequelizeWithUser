require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")

let sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    logging:false
})

sequelize.authenticate().then(()=>{
    console.log("DB is connected");
}).catch(err=>{
    console.log("Error: " +err);
})

let db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.Users=require("./models")(sequelize,DataTypes)

sequelize.sync()
module.exports=db