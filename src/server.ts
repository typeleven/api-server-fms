import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';
import services from './services';
const { connect } = require('marpat');
const { port, env, fmsDatastore } = config.app;

console.clear();

routes(app);

const start = async () => {
    services.db();

    // connect marpat to fms if an fms server is found
    if (config.filemaker.server) {
        try {
            await connect(fmsDatastore);
            console.log('✔️  Marpat Connected');
        } catch (error) {
            console.log(`❌ ${chalk.bgRed('Error Connecting Marpat')}`);
        }
    } else {
        console.log('➖ Skipping Marpat Connection');
    }

    // start the express server
    app.listen(port);
    console.log(`🤖 Port ${chalk.red(port)} | ${chalk.blue(env)}`);
};

setImmediate(start);
