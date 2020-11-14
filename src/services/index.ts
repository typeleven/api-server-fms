// @index: import ${variable} from ${relpath};
import auth from './auth';
import aws from './aws';
import db from './db';
import filemaker from './filemaker';
import logger from './logger';
import rateLimit from './rate-limit';
import responseTime from './response-time';
import validation from './validation';
// /index

export default {
    // @index:${variable},
    auth,
    aws,
    db,
    filemaker,
    logger,
    rateLimit,
    responseTime,
    validation,
    // /index
};
