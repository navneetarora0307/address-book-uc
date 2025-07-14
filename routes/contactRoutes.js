const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/create', contactController.createContacts);
router.put('/update', contactController.updateContacts);
router.delete('/delete', contactController.deleteContacts);
router.post('/search', contactController.searchContacts);

module.exports = router;
