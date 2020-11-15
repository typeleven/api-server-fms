import config from '../config';
import aws from 'aws-sdk';

const s3 = new aws.S3(config.aws.credentials);

const uploadToS3 = async (
    file: any,
    dir: string,
    bucket: string,
    filename: string
): Promise<any> => {
    try {
        const key = filename
            ? `${dir}/${filename}`
            : `${dir}/${file.originalname}`;
        await s3
            .putObject({
                Bucket: bucket,
                Key: key,
                ContentType: file.mimetype,
                Body: file.buffer,
            })
            .promise();
        return { key, bucket, type: file.mimetype };
    } catch (error) {
        throw new Error(error.message);
    }
};

const getFromS3 = async (key: string, bucket: string, VersionId?: any) => {
    try {
        const response = await s3
            .getObject({ Bucket: bucket, Key: key, VersionId })
            .promise();
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

const get = async (key: any, bucket: string, VersionId?: any) => {
    try {
        const result = await getFromS3(key, bucket, VersionId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
const upload = async (
    file: any,
    dir: string,
    bucket: string,
    filename: string
) => {
    try {
        // console.log(file);
        const result = await uploadToS3(file, dir, bucket, filename);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default { upload, get };
