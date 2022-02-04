const { Sequelize,DataTypes } = require("sequelize");
const  sequelize  = require("../utils/db");

const index = sequelize.define('application', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    //------------------------------------------- Personal Details
    Title:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Gender:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    FamilyName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    GivenNames:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    DateofBirth:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CountryOfBirth:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Mobile:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Email:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    AddressInAustralia:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    PostalAddress:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    HomeCountryAddress:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    HomeCountry:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    HomeCountryMobile:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EmergencyContactName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EmergencyContactRelationship:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EmergencyContactMobile:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EmergencyContactEmail:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EmergencyContactAddress:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- status
    Valid:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
    },
    // -----------------------------------------reserve segment
    Reserve:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
}, {
    freezeTableName: true,
});

const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')
const ObjectType = new GraphQLObjectType({
    description: 'user model',
    fields: {
        id: {
            type: GraphQLID,
        },
        Email:{
            type: GraphQLString,
        },
    //------------------------------------------- basic
        
    //------------------------------------------- status
        Valid: {
            type: GraphQLBoolean,
        },
        Reserve: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
            description:"unix time stamp",
        },
        createdAt: {
            type: GraphQLString,
            description:"unix time stamp",
        },

        // other fields
        JWT: {
            type: GraphQLString,
        },
    },
    name: 'UserObject',
})

const InputType = new GraphQLInputObjectType({
    description: 'user model',
    fields: {
        id: {
            type: GraphQLID,
        },
        Email:{
            type: GraphQLString,
        },
    //------------------------------------------- basic
        
    //------------------------------------------- status
        Valid: {
            type: GraphQLBoolean,
        },
        Reserve: {
            type: GraphQLString,
        },
    },
    name: 'UserInput',
})
module.exports = {
    index,
    ObjectType,
    InputType,
}

