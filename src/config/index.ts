require('dotenv').config();

// @index: import ${variable} from ${relpath};
import app from './app';
import aws from './aws';
import filemaker from './filemaker';
// /index

export default {
    // @index:${variable},
    app,
    aws,
    filemaker,
    // /index
};
