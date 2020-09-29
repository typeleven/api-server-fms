import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';
const { connect } = require('marpat');
const { port, env, datastore } = config.app;

console.clear();

routes(app);

const start = async () => {
    try {
        await connect(datastore);
        app.listen(port);
        console.log(`🤖 Port ${chalk.red(port)} ( ${chalk.blue(env)} )`);
    } catch (error) {
        console.log(error);
    }
};

setImmediate(start);
