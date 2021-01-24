import express from 'express';
import controllers from '../../../controllers';
import asyncHandler from 'express-async-handler';
import { celebrate, Joi } from 'celebrate';
const router = express.Router();

router.post(
    '/contact',
    asyncHandler(async (req, res) => {
        const contact = await controllers.contacts.create(req.body);
        res.send(contact);
    })
);

router.get(
    '/contact',
    asyncHandler(async (req, res) => {
        const result = await controllers.contacts.list();
        result ? res.send(result) : res.boom.badRequest(`No Contacts Found`);
    })
);

router.get(
    '/contact/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.contacts.get(req.params.id);
        result
            ? res.send(result)
            : res.boom.badRequest(`No Contact found with _id ${req.params.id}`);
    })
);

router.patch(
    '/contact/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.contacts.update(
            req.params.id,
            req.body
        );
        result
            ? res.send(result)
            : res.boom.badRequest(`No Contact found with _id ${req.params.id}`);
    })
);

router.delete(
    '/contact/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.contacts.remove(req.params.id);
        result
            ? res.send({ message: 'Contact Deleted' })
            : res.boom.badRequest(`No Contact found with _id ${req.params.id}`);
    })
);

router.post(
    '/attachment',
    celebrate({
        body: {
            name: Joi.string().required(),
            type: Joi.string().required(),
            uri: Joi.string().required(),
            contact: Joi.array().required(),
        },
    }),
    asyncHandler(async (req, res) => {
        const attachment = await controllers.attachments.create(req.body);
        res.send(attachment);
    })
);

router.get(
    '/attachment',
    asyncHandler(async (req, res) => {
        const result = await controllers.attachments.list();
        result ? res.send(result) : res.boom.badRequest(`No Attachments Found`);
    })
);

router.patch(
    '/attachment/:id',
    asyncHandler(async (req, res) => {
        const result = await controllers.attachments.update(
            req.params.id,
            req.body
        );
        result
            ? res.send(result)
            : res.boom.badRequest(`No Contact found with _id ${req.params.id}`);
    })
);

export default router;
