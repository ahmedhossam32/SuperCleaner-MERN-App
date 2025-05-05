const express = require('express');
const router = express.Router();
const { submitContactForm, getAllContacts, deleteContact } = require('../controllers/contactController');

router.post('/', submitContactForm);
router.get('/', getAllContacts);
router.delete('/:id', deleteContact);


module.exports = router;
