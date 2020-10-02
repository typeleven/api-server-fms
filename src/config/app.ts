const app = {
    port: Number(process.env.PORT) || 9000,
    env: process.env.NODE_ENV || 'development',
    bodySizeLimit: process.env.API_BODY_SIZE_LIMIT || '100mb',
    parameterLimit: Number(process.env.API_PARAMETER_LIMIT) || 10000,
    datastore: process.env.DATASTORE,
    apiKey: process.env.API_KEY,
    logglyApiKey: process.env.LOGGLY_API_KEY,
    logglySubdomain: process.env.LOGGLY_SUBDOMAIN,
    logglyUsername: process.env.LOGGLY_USERNAME,
    logglyPassword: process.env.LOGGLY_PASSWORD,
    serverName: process.env.SERVER_NAME || 'api-server-fms',
};

export default app;
