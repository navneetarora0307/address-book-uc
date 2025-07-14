const { v4: uuidv4 } = require('uuid');

class Contact {
  constructor({ name, phone, email }) {
    this.id = uuidv4(); // Generate UUID for new contact
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  update(fields) {
    if (fields.name) this.name = fields.name;
    if (fields.phone) this.phone = fields.phone;
    if (fields.email) this.email = fields.email;
  }
}

module.exports = Contact;
