const Contact = require('../models/Contact');
const ContactStore = require('../storage/ContactStore');

class ContactService {
  createContacts(contactDataArray) {
    const createdContacts = [];

    for (const data of contactDataArray) {
      const contact = new Contact(data);
      ContactStore.add(contact);
      createdContacts.push(contact);
    }

    return createdContacts;
  }

  updateContacts(updateDataArray) {
    const updatedContacts = [];

    for (const data of updateDataArray) {
      const { id, ...fields } = data;
      const updated = ContactStore.update(id, fields);
      if (updated) {
        updatedContacts.push(updated);
      }
    }

    return updatedContacts;
  }

  deleteContacts(ids) {
    let deletedCount = 0;

    for (const id of ids) {
      const success = ContactStore.delete(id);
      if (success) deletedCount++;
    }

    return { deleted: deletedCount };
  }

  searchContacts(query) {
    return ContactStore.search(query);
  }
}

module.exports = new ContactService();
