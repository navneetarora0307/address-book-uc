const { validate: isUUID } = require('uuid');

function validateContactInput(contact) {
  const errors = [];

  if (!contact.name || typeof contact.name !== 'string') {
    errors.push('Invalid or missing name');
  }
  if (!contact.phone || typeof contact.phone !== 'string') {
    errors.push('Invalid or missing phone');
  }
  if (!contact.email || typeof contact.email !== 'string') {
    errors.push('Invalid or missing email');
  }

  return errors;
}

function validateUUID(id) {
  return isUUID(id);
}

module.exports = {
  validateContactInput,
  validateUUID,
};
