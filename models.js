

module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("users",{
        username:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false
    })
    return Users
    
    
}
