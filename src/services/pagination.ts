import { Request } from 'express';
import _ from 'lodash';

const getOptions = (req: Request) => {
    if (typeof req.query.select === 'string')
        req.query.select = req.query.select.split(',');
    const result = _.pick(req.query, [
        'select',
        'limit',
        'sort',
        'offset',
        'page',
        'populate',
    ]);
    return result;
};

export default { getOptions };
