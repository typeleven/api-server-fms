import express from 'express';
import health from './health';
import logs from './logs';
import accounts from './accounts';
import sandbox from './sandbox';

const router = express.Router();

router.get('/', health);

router.use('/health', health);
router.use('/logs', logs);
router.use('/accounts', accounts);
router.use('/sandbox', sandbox);

export default router;
