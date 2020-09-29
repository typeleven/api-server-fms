import slowDown from 'express-slow-down';

const rateLimiterGlobal = slowDown({
    windowMs: 5 * 60 * 1000, // 5 minutes
    delayAfter: 200, // allow 'delayAfter' requests per 'windowMs', then...
    delayMs: 10, // begin adding 'delayMs' of delay per request above delayAfter:
    maxDelayMs: 2000, // maximum value for delayMs
});

const rateLimiterStrict = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 5, // allow 'delayAfter' requests per 'windowMs', then...
    delayMs: 10000, // begin adding 'delayMs' of delay per request above delayAfter:
    maxDelayMs: 10000, // maximum value for delayMs
});

export default { rateLimiterGlobal, rateLimiterStrict };
