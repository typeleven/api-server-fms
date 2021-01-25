require('dotenv').config();
// @index: export { default as ${variable} } from ${relpath};
export { default as api } from './api';
export { default as app } from './app';
export { default as aws } from './aws';
export { default as filemaker } from './filemaker';
// /index

// @index: import ${variable} from ${relpath};
import api from './api';
import app from './app';
import aws from './aws';
import filemaker from './filemaker';
// /index

export default {
    // @index:${variable},
    api,
    app,
    aws,
    filemaker,
    // /index
};
