import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';
import services from './services';
import { serverUnavailable } from '@hapi/boom';
const { connect } = require('marpat');
const { Filemaker } = require('fms-api-client');
const { port, env, datastore } = config.app;

routes(app);

const start = async () => {
    try {
        await connect(datastore);

        app.listen(port);
        console.clear();
        console.log(`🤖 Port ${chalk.red(port)} ( ${chalk.blue(env)} )`);
    } catch (error) {
        console.log(error);
    }
};

setImmediate(start);
