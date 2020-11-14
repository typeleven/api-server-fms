const aws = {
    credentials: {
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
    },
    bucket: {
        main: process.env.AWS_S3_BUCKET_MAIN,
    },
};

export default aws;
