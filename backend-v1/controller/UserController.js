const { 
    GraphQLList,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt, 
    GraphQLInputObjectType,
} = require('graphql')

const services = require("../service")
const models = require("../models")



//--------------------------------------------------------  query

exports.users = {
    type: new GraphQLList(models.user.ObjectType),
    args: {
        FullName: {
            type: GraphQLString,
            defaultValue:'',
        },
        offset: {
            type: GraphQLInt,
            defaultValue:0,
        },
        limit: {
            type: GraphQLInt,
            defaultValue:10000000,
        },
    },
    resolve: services.UserService.FindAll
}

/**
 * find user by id
 * @route get 
 * @group user - Operations about user
 * @param {string} id.query.required
 * @returns {object} 200 - token and user
 */
exports.user = {
    type:models.user.ObjectType,
    args: {
        id: {
            type: GraphQLString,
            defaultValue:'',
            description:"required",
        },
    },
    resolve: services.UserService.FindOne
}



//--------------------------------------------------------  mutation

/**
 * Create user 
 * @route post 
 * @group user - Operations about user
 * @param {object} user.body.required - Title,userId are required
 * @returns {object} 200 - trainer
 */
 exports.UserCreate = {
    description:'UserCreate: Create user: userId,Title is required',
    type: models.user.ObjectType,
    args: {
        Email: {type: GraphQLString},
    },
    resolve: services.UserService.Create
}

/**
 * regist user - 1 , get email and name, send email
 * @route post 
 * @group user - Operations about user
 * @param {object} user.body.required - Email,PhoneNumber,FullName,Password are required
 * @returns {object} 200 - token and user
 */
exports.UserSignup = {
    description:'UserSignup: regist user, get email address and send verify code to email, Email,Name are required',
    type: models.user.ObjectType,
    args: {
        user: {
            type: models.user.InputType,
        },
    },
    resolve: services.UserService.Signup
}



/**
 * signin user 
 * Email,PhoneNumber is optional, if provide both, will do phone number login, Password is required
 * @route post 
 * @group user - Operations about user
 * @param {string} Email.body 
 * @param {string} Password.body.required 
 * @returns {object} 200 - token and user
 */
exports.UserSignin = {
    description:'UserSignin: sign in user, Email, Password is required',
    type:models.user.ObjectType,
    args: {
        Email: {
            type: GraphQLString,
            defaultValue:'',
        },
        Password: {
            type: GraphQLString,
            defaultValue:'',
        }
    },
    resolve: services.UserService.UserSignin
}

/**
 * update user
 * @route post 
 * @group user - Operations about user
 * @param {object} user.body.required - id is required
 * @returns {object} 200 - user
 */
 exports.UserUpdate = {
    description:'UserUpdate: id is required',
    type: GraphQLString,
    args: {
        user: {type: models.user.InputType},
    },
    resolve: services.UserService.Update
}