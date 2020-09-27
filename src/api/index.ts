import express from 'express';
import sandbox from './sandbox';
import health from './health';

const router = express.Router();

router.get('/', health);

router.use('/health', health);
router.use('/sandbox', sandbox);

export default router;
