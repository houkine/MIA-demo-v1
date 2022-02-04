var express = require('express');
var router = express.Router();

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



// upload to s3
router.post('/aws_upload', async function(req, res, next) {
  upload(req, res, error => {
    if (error) {
      console.log(error);
      return res.status(404).json(`Failed to upload image file: ${error}`);
    }
    // console.log(req);
    if (req.files[0]) {
      return res.status(200).json(req.files[0].key);
    } else {
      return res.status(500).json(`Failed to upload image file`);
    }
  })
});

// download from s3
router.get('/aws_download', async function(req, res, next) {
  let {filename} = req.query
  const downloadParams = {
    Key: filename,
    Bucket: bucket,
  };
  let file = s3.getObject(downloadParams).createReadStream();
  file.pipe(res)
});

module.exports = router;

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

