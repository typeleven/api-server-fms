const app = {
    port: Number(process.env.PORT) || 9000,
    env: process.env.NODE_ENV || 'development',
    bodySizeLimit: process.env.API_BODY_SIZE_LIMIT || '100mb',
    parameterLimit: Number(process.env.API_PARAMETER_LIMIT) || 10000,

    fmsDatastore: process.env.FMS_DATASTORE,
    dbDatastore: process.env.DB_DATASTORE,

    apiKey: process.env.API_KEY,

    apiKeyArray: JSON.parse(process.env.API_KEY_ARRAY || '[]'),

    tokenSecret: process.env.SECRET_TOKEN,
    tokenExpiresIn: process.env.EXPIRES_IN_TOKEN,

    refreshSecret: process.env.SECRET_REFRESH,
    refreshExpiresIn: process.env.EXPIRES_IN_REFRESH,

    logglyApiKey: process.env.LOGGLY_API_KEY,
    logglySubdomain: process.env.LOGGLY_SUBDOMAIN,
    logglyUsername: process.env.LOGGLY_USERNAME,
    logglyPassword: process.env.LOGGLY_PASSWORD,
    serverName: process.env.SERVER_NAME || 'api-server-fms',
};

export default app;
