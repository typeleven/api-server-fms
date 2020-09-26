import express from 'express';

const router = express.Router();

router.get('/', require('./health'));

router.use('/health', require('./health'));
router.use('/sandbox', require('./sandbox'));

export default router;
