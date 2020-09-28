const app = {
    port: Number(process.env.PORT) || 9000,
    env: process.env.NODE_ENV || 'development',
    bodySizeLimit: process.env.API_BODY_SIZE_LIMIT || '100mb',
    parameterLimit: Number(process.env.API_PARAMETER_LIMIT) || 10000,
    datastore: process.env.DATASTORE,
    apiKey: process.env.API_KEY,
};

export default app;
