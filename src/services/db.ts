import mongoose from 'mongoose';
import config from '../config';
import chalk from 'chalk';

const mongoConnect = async () => {
    // connect mongoose to mongodb if there is a mongodb connection string
    if (config.app.dbDatastore?.startsWith('mongodb')) {
        try {
            await mongoose.connect(config.app.dbDatastore, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            });

            const db = mongoose.connection;

            console.log('✔️  Mongoose Connected');
        } catch (error) {
            console.log(`❌ ${chalk.bgRed('Error Connecting Mongoose')}`);
        }
    } else {
        console.log('➖ Skipping Mongoose Connection');
    }
};

export default { mongoConnect };
