import { celebrate, Joi, Segments } from 'celebrate';

const newUserValidate = () =>
    celebrate({
        [Segments.QUERY]: {
            token: Joi.string().token().required(),
        },
    });

export default {
    newUserValidate,
};
