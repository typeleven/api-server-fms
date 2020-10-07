import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';
import services from './services';
const { port, env } = config.app;

console.clear();

routes(app);

const start = async () => {
    // Connect Mongo DB
    await services.db.mongoConnect();
    // Connect Marpat for fms-data-api
    await services.filemaker.marpatConnect();

    // start the express server
    app.listen(port);
    console.log(`🤖 Port ${chalk.red(port)} | ${chalk.blue(env)}`);
};

setImmediate(start);
