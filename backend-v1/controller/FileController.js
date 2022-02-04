const { 
    GraphQLList,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt, 
    GraphQLInputObjectType,
} = require('graphql')
const { GraphQLUpload } = require('graphql-upload');
const services = require("../service")
const models = require("../models")

const multer = require('multer')
const multerS3 = require('multer-s3')

// aws config
const AWS = require("aws-sdk");
const aws_access_key_id = 'AKIAUU2YFWLRJZK5NND6'
const aws_secret_access_key = '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'
const bucket= "houkine-test1"
const acl= "private"
AWS.config.credentials ={
  accessKeyId: aws_access_key_id,
  secretAccessKey: aws_secret_access_key,
}
AWS.config.region = "ap-northeast-1";
const s3 = new AWS.S3();

//--------------------------------------------------------  query

/**
 * upload file to s3
 */
exports.upload = {
    description:'file upload',
    type: GraphQLString,
    args: {
        file: {
            type: GraphQLUpload,
        },
    },
    resolve: async (_,{file},{token}) => {
    
        // token verify
        if(!await authService().verify(token)) return null
    
        upload(req, res, error => {
            if (error) {
              console.log(error);
              return null
            }
            // console.log(req);
            if (req.files[0]) {
              return req.files[0].key
            } else {
              return null
            }
        })
    
    }
}


// multer save to s3
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucket,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, `${Date.now().toString()} - ${file.originalname}`)
      }
    })
  }).array('fileData', 1)