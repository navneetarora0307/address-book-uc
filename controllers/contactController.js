const ContactService = require('../services/ContactService');
const { validateContactInput, validateUUID } = require('../utils/validate');

const createContacts = (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Request body must be an array' });
    }

    const invalid = req.body.filter((c) => validateContactInput(c).length > 0);
    if (invalid.length > 0) {
      return res.status(400).json({ error: 'Invalid contact data', invalid });
    }

    const contacts = ContactService.createContacts(req.body);
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error in createContacts:', err);
    res.status(500).json({ error: 'Failed to create contacts.' });
  }
};

const updateContacts = (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Request body must be an array' });
    }

    const invalidIds = req.body.filter((c) => !validateUUID(c.id));
    if (invalidIds.length > 0) {
      return res.status(400).json({ error: 'Invalid UUIDs in request', invalidIds });
    }

    const updated = ContactService.updateContacts(req.body);
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error in updateContacts:', err);
    res.status(500).json({ error: 'Failed to update contacts.' });
  }
};

const deleteContacts = (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Request body must be an array of UUIDs' });
    }

    const invalidIds = req.body.filter((id) => !validateUUID(id));
    if (invalidIds.length > 0) {
      return res.status(400).json({ error: 'Invalid UUIDs', invalidIds });
    }

    const result = ContactService.deleteContacts(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.error('Error in deleteContacts:', err);
    res.status(500).json({ error: 'Failed to delete contacts.' });
  }
};

const searchContacts = (req, res) => {
  try {
    if (!req.body.query || typeof req.body.query !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid search query' });
    }

    const results = ContactService.searchContacts(req.body.query);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error in searchContacts:', err);
    res.status(500).json({ error: 'Failed to search contacts.' });
  }
};

const getAllContacts = (req, res) => {
  try {
    const contacts = ContactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error in getAllContacts:', err);
    res.status(500).json({ error: 'Failed to get all contacts.' });
  }
};

module.exports = {
  createContacts,
  updateContacts,
  deleteContacts,
  searchContacts,
  getAllContacts,
};
