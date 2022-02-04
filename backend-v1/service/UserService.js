const models = require('../models')
const {NotNullCheck} = require('../utils/paramverify')
const crypt = require('../utils/crypt')
const authService = require('../service/authService')
const EmailService = require('../service/EmailService')
const { Op } = require("sequelize")
const moment = require("moment")

// find one user 
module.exports.FindOne = async (_,{
    id
},{token}) => {
    // 1 token verify
    if(!await authService().verify(token)) return null

    // 2 id required, need check first
    let check = NotNullCheck([id])
    if(!check) return null
    
    // 3 find a user by model
    let user = await models.user.index.findOne({where:{id}})

    // 4 find other fields if needed, and return
    if(!user) return null
    return {
        ...user.dataValues,
        Update:await models.updates.index.findAll({where:{
            userId:id,
            IsRead:false,
        }}),
    }
}

// find all users
module.exports.FindAll = async (_,{
    FullName,offset,limit
}) => {

    users = await models.user.index.findAll({ 
        where: {FullName: {[Op.like]:'%'+FullName+'%'}},
        offset,
        limit,
    });

    return users
}

// create user
module.exports.Create = async (_,{
    Email
}) => {

    // 1 userId,Title are required, need check first
    let check = NotNullCheck([Email])
    if(!check) return null

    // 2 save goal
    let NewUser = await models.user.index.create({Email})

    // 3 return
    return NewUser
}

// sign up user 
module.exports.Signup = async (_,{
    user
}) => {
    let {Email,Password} = user

    // 1 Email,PhoneNumber,FullName,Password are required, need check first
    let check = NotNullCheck([Email,Password])
    if(!check) return null

    // 2 encrypt password
    user.Password = await crypt.encrypt(Password)
    user.status = 'active'

    // 3 check and save user
    let status = 'inactive'
    let NewUser = await models.user.index.findOne({
        where: {Email,status},
    })

    // 3.1 if user existed, return null
    if(!NewUser){
        return null
    }

    // 4 save user fields
    let result = await models.user.index.update(user,{
        where: { 
            id:NewUser.id, 
        },
    })
    if(result!=1) return null

    // 5 generate token
    let payload = NewUser.id
    const token = authService().issue({ payload });

    return {
        ...NewUser.dataValues,
        JWT:token,
    }
}

// sign in user , 
module.exports.UserSignin = async (_,{
    Email,Password,
}) => {

    // 1 check Email, password
    let check = NotNullCheck([Email,Password])
    if(!check) return null

    // 2 Email login
    let Valid = true
    let status = 'active'
    let user = await models.user.index.findOne({ where: { 
        Email,Valid,status
    } });

    //3 check user is existed 
    if (user === null) return null

    //4 check password validation
    if(await crypt.compare(user.Password,Password)){
        //password correct, ready to return

        // 5 generate token
        let token = authService().issue({ payload:user.id });

        // 6 return
        return {
            ...user.dataValues,
            JWT:token,
            Update: async ()=> await models.updates.index.findAll({where:{
                userId:user.id,
                IsRead:false,
            }}),
        }

    }else{
        //5.1 password not correct
        return null
    }
}


module.exports.Update = async (_,{
    user
},{token}) => {
    let {id,Password} = user

    // 1 token verify
    if(!await authService().verify(token)) return null

    // 2 id is required, need check first
    let check = NotNullCheck([id])
    if(!check) return 'failed'

    // 3 encrypt password if has
    check = NotNullCheck([Password])
    if(check){
        user.Password = await crypt.encrypt(Password)
    }

    // 4 check and save user
    let result = await models.user.index.update(user,{
        where: { id },
    })
    
    // 5 check result and return, 
    return result==1?'success':'failed'
}

