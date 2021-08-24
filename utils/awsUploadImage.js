const aws = require("aws-sdk");

const ID = process.env.AWS_ID_ACCESS_KEY;
const SECRET_KEY = process.env.AWS_SECRET_KEY;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new aws.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET_KEY,
});

const awsUploadImage = async (file, filePath) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: `${filePath}`,
    Body: file,
  };

  try {
    const resp = await s3.upload(params).promise();
    return resp.Location;
  } catch (error) {
    console.log(error.msg);
    throw new Error("Fallo al subir la imagen");
  }
};

module.exports = awsUploadImage;
