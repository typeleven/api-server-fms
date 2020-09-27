const filemaker = {
    server: process.env.FILEMAKER_SERVER,
    database: process.env.FILEMAKER_DATABASE,
    user: process.env.FILEMAKER_USERNAME,
    password: process.env.FILEMAKER_PASSWORD,
    layout: process.env.FILEMAKER_LAYOUT,
};

export default filemaker;
