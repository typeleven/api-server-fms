// @index: import ${variable} from ${relpath};
import auth from './auth';
import filemaker from './filemaker';
import rateLimit from './rate-limit';
import validation from './validation';
// /index

export default {
    // @index:${variable},
    auth,
    filemaker,
    rateLimit,
    validation,
    // /index
};
