import express from 'express';
import health from './health';
import validation from '../services/validation';
import logs from './logs';
import accounts from './accounts';
import sandbox from './sandbox';
import s3 from './aws/s3';

const router = express.Router();
const { handleErrors } = validation;

router.get('/', health);

router.use('/health', health);
router.use('/logs', logs);
router.use('/accounts', accounts);
router.use('/sandbox', sandbox);
router.use('/aws/s3', s3);

router.use(handleErrors);

export default router;
