class ContactStore {
    constructor() {
      this.contacts = new Map(); // key: id, value: Contact
      this.nameIndex = new Map(); // key: lowercase word, value: Set of IDs
    }
  
    add(contact) {
      this.contacts.set(contact.id, contact);
  
      const words = contact.name.toLowerCase().split(' ');
      words.forEach((word) => {
        if (!this.nameIndex.has(word)) {
          this.nameIndex.set(word, new Set());
        }
        this.nameIndex.get(word).add(contact.id);
      });
    }
  
    update(id, fields) {
      const contact = this.contacts.get(id);
      if (!contact) return null;
  
      // Clean old index if name is changing
      if (fields.name && fields.name !== contact.name) {
        const oldWords = contact.name.toLowerCase().split(' ');
        oldWords.forEach((word) => {
          this.nameIndex.get(word)?.delete(contact.id);
        });
  
        const newWords = fields.name.toLowerCase().split(' ');
        newWords.forEach((word) => {
          if (!this.nameIndex.has(word)) this.nameIndex.set(word, new Set());
          this.nameIndex.get(word).add(contact.id);
        });
      }
  
      contact.update(fields);
      return contact;
    }
  
    delete(id) {
      const contact = this.contacts.get(id);
      if (!contact) return false;
  
      this.contacts.delete(id);
  
      const words = contact.name.toLowerCase().split(' ');
      words.forEach((word) => {
        this.nameIndex.get(word)?.delete(id);
      });
  
      return true;
    }
  
    getById(id) {
      return this.contacts.get(id) || null;
    }
  
    search(query) {
      const word = query.toLowerCase();
      const ids = this.nameIndex.get(word) || new Set();
      return Array.from(ids).map((id) => this.contacts.get(id));
    }
  
    getAll() {
      return Array.from(this.contacts.values());
    }
  }
  
  module.exports = new ContactStore(); // Singleton store
  