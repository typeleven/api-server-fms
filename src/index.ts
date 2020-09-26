import chalk from 'chalk';
import config from './config';
import routes from './routes';
import app from './app';

const { port, host, env } = config.app;

routes(app);

setImmediate(() => {
    app.listen(port, host, () => {
        console.clear();
        console.log(
            `🤖 ${chalk.magenta(host)}:${chalk.red(port)} ( ${chalk.blue(
                env
            )} )`
        );
    });
});
