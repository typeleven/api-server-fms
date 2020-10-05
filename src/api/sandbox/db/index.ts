import express from 'express';
import controllers from '../../../controllers';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.post(
    '/contact',
    asyncHandler(async (req, res) => {
        const contact = await controllers.contacts.create(req.body);
        res.send(contact);
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

export default router;
