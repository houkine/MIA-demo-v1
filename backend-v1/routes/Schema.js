const { 
    buildSchema,
    GraphQLSchema, 
    GraphQLObjectType,
} = require('graphql')
const Controllers = require("../controller")
const {
    GraphQLUpload,
    graphqlUploadExpress, 
} = require('graphql-upload');

const query = new GraphQLObjectType({
    name: 'root_query_type_v1',
    description:"get options",
    fields: {

        // user
        user: Controllers.UserController.user,
        users: Controllers.UserController.users,
    }
})
const mutation = new GraphQLObjectType({
    name: 'root_mutation_type_v1',
    description:"post, update, delete options ",
    fields: {

        // user
        UserCreate: Controllers.UserController.UserCreate,
        UserSignup: Controllers.UserController.UserSignup,
        UserSignin: Controllers.UserController.UserSignin,
        UserUpdate: Controllers.UserController.UserUpdate,
    }
})

module.exports = new GraphQLSchema({
    query,
    mutation
})