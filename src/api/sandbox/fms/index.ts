import express, { Response } from 'express';
import services from '../../../services';
import axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import tough from 'tough-cookie';
const router = express.Router();

axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

const instance = axios.create();

router.use(services.filemaker.addFmsClient);

router.get('/get/:name', async (req: any, res) => {
    const client = req.locals.filemaker;
    try {
        const result = await client.find(
            'Data',
            { Name: req.params.name },
            { limit: 1 }
        );

        if (!result?.data[0]?.fieldData?.Image) return res.boom.notFound();

        const url = result.data[0].fieldData.Image;

        const response = await instance.get(url, {
            jar: cookieJar,
            responseType: 'stream',
            withCredentials: true,
        });
        response.data.pipe(res);
    } catch (error) {
        res.status(error.code).send(error);
    }
});

export default router;
