import express from 'express';
import services from '../../../services';
const router = express.Router();

const { pipeContainerUrl } = services.filemaker;

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

        pipeContainerUrl(url, res);
    } catch (error) {
        res.status(error.code).send(error);
    }
});

export default router;
