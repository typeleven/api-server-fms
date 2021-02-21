import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';
import services from './services';
import next from 'next';
const { port, env } = config.app;
const dev = env === 'development';
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();

// console.clear();

routes(app);

const start = async () => {
    await nextApp.prepare();
    // Connect Mongo DB
    await services.db.mongoConnect();
    // Connect Marpat for fms-data-api
    await services.filemaker.marpatConnect();

    app.all('*', (req, res) => {
        return handler(req, res);
    });

    // start the express server
    app.listen(port);
    console.log(`🤖 Port ${chalk.red(port)} | ${chalk.blue(env)}`);
};

setImmediate(start);
