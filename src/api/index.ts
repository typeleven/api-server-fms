import express from 'express';
import sandbox from './sandbox';
import health from './health';
import logs from './logs';

const router = express.Router();

router.get('/', health);

router.use('/health', health);
router.use('/logs', logs);
router.use('/sandbox', sandbox);

export default router;
