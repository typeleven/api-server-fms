import { RequestHandler } from 'compose-middleware';
import express from 'express';
import services from '../../../services';
import multer from 'multer';

const { aws } = services;

const upload = multer();

const router = express.Router();

router.post(
    '/:bucket/:dir',
    services.auth.validation,
    upload.single('file'),
    async (req, res) => {
        try {
            if (!req.file) return res.boom.badRequest('File is required');
            const key = await aws.upload(
                req.file,
                req.params.dir,
                req.params.bucket,
                req.body.filename
            );
            res.send({ key });
        } catch (error) {
            res.boom.badRequest(error.message);
        }
    }
);

router.get(
    '/:bucket/:folder/:filename',
    services.auth.validation,
    async (req, res) => {
        try {
            const result: any = await aws.get(
                `${req.params.folder}/${req.params.filename}`,
                req.params.bucket,
                req.query.version
            );
            return res.end(result.Body, result, result.ContentType);
        } catch (error) {
            res.boom.badRequest(error.message);
        }
    }
);

export default router;
