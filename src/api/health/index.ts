import express from 'express';
import duration from 'humanize-duration';
import os from 'os';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        serverUptime: duration(process.uptime() * 1000, {
            largest: 2,
            round: true,
        }),
        os: {
            platform: os.platform(),
            arch: os.arch(),
            release: os.release(),
            loadavg: os.loadavg(),
            uptime: duration(os.uptime() * 1000, {
                largest: 2,
                round: true,
            }),
        },
    });
});

export default router;
