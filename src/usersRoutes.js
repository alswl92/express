import express from 'express';
import {getContacts, createContact, getContact, deleteContact, updateContact} from './usersController.js';

const router = express.Router();

router.get('/contacts', getContacts);
router.post('/contact', createContact);
router.get('/contact/:id', getContact);
router.delete('/contact/:id', deleteContact);
router.put('/contact/:id', updateContact);

export default router;