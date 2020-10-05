import { isCelebrateError } from 'celebrate';
import { ErrorRequestHandler } from 'express';

const errors: ErrorRequestHandler = (err, req, res, next) => {
    if (!isCelebrateError(err)) {
        return res.boom.badRequest(err.message);
    }

    let message;
    let location;

    if (err.details.has('query')) {
        location = 'query';
        message = err?.details?.get('query')?.details[0].message;
    }

    if (err.details.has('body')) {
        location = 'body';
        message = err?.details?.get('body')?.details[0].message;
    }
    if (err.details.has('cookies')) {
        location = 'cookies';
        message = err?.details?.get('cookies')?.details[0].message;
    }
    if (err.details.has('headers')) {
        location = 'headers';
        message = err?.details?.get('headers')?.details[0].message;
    }
    if (err.details.has('params')) {
        location = 'params';
        message = err?.details?.get('params')?.details[0].message;
    }
    if (err.details.has('signedCookies')) {
        location = 'signedCookies';
        message = err?.details?.get('signedCookies')?.details[0].message;
    }
    return res.boom.badRequest(message, { location });
};

export default { errors };
