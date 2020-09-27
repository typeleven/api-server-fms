require('dotenv').config();

// @index: import ${variable} from ${relpath};
import app from './app';
import filemaker from './filemaker';
// /index

export default {
    // @index:${variable},
    app,
    filemaker,
    // /index
};