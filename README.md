# Address Book Service

A simple, modular address book backend built using Node.js and Express.  
It supports creating, updating, deleting, and searching contacts — all stored in-memory.

> ⚠️ Note: The server runs on **port 5001** instead of 5000 because port 5000 is reserved on some macOS systems.

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- UUIDs generated using the `uuid` package

---

## 🚀 Getting Started

### 1. Install Dependencies

Make sure you have Node.js (v18 or later). Then run:

```bash
npm install
```

### 2. Run the Server

```bash
npx nodemon app.js
```

or

```bash
node app.js
```

The server will start on:

```
http://localhost:5001
```

You should see:

```json
{ "message": "Hello from Address Book!" }
```

---

## 🧪 API Endpoints

All requests and responses are in **JSON format**.

---

### 1. Create Contacts

**POST** `/create`

**Request Body:**

```json
[
  {
    "name": "Naruto Uzumaki",
    "phone": "9876543210",
    "email": "naruto@example.com"
  },
  {
    "name": "Bob Jones",
    "phone": "2345678901",
    "email": "bob@example.com"
  }
]
```

**Response:**

```json
[
  {
    "id": "uuid-generated-1",
    "name": "Naruto Uzumaki",
    "phone": "9876543210",
    "email": "naruto@example.com"
  },
  {
    "id": "uuid-generated-2",
    "name": "Bob Jones",
    "phone": "2345678901",
    "email": "bob@example.com"
  }
]
```

---

### 2. Update Contacts

**PUT** `/update`

**Request Body:**

```json
[
  {
    "id": "uuid-of-contact",
    "phone": "9999999999"
  },
  {
    "id": "uuid-of-other-contact",
    "email": "updated@example.com"
  }
]
```

**Response:**

```json
[
  {
    "id": "uuid-of-contact",
    "name": "Naruto Uzumaki",
    "phone": "9999999999",
    "email": "naruto@example.com"
  },
  {
    "id": "uuid-of-other-contact",
    "name": "Bob Jones",
    "phone": "2345678901",
    "email": "updated@example.com"
  }
]
```

---

### 3. Delete Contacts

**DELETE** `/delete`

**Request Body:**

```json
[
  "uuid-of-contact-1",
  "uuid-of-contact-2"
]
```

**Response:**

```json
{
  "deleted": 2
}
```

---

### 4. Search Contacts

**POST** `/search`

**Request Body:**

```json
{
  "query": "Naruto"
}
```

**Response:**

```json
[
  {
    "id": "some-uuid",
    "name": "Naruto Uzumaki",
    "phone": "9876543210",
    "email": "naruto@example.com"
  },
  {
    "id": "some-other-uuid",
    "name": "Sasuke Uchiha",
    "phone": "3456789012",
    "email": "sasuke@example.com"
  }
]
```

### 5. Get All Contacts

**GET** `/getAll`

🔍 Returns a list of **all contacts** currently stored in the address book.

#### 📥 Request

No body required.

#### 📤 Response

```json
[
  {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "Naruto Uzumaki",
    "phone": "9876543210",
    "email": "naruto@example.com"
  },
  {
    "id": "e3b0c442-98fc-1c14-9af5-abc12d3e4d59",
    "name": "Sasuke Uchiha",
    "phone": "2345678901",
    "email": "sasuke@example.com"
  }
]
```

---

## 🔒 Validation & Error Handling

- All UUIDs are validated.
- Required fields (`name`, `phone`, `email`) are checked on creation.
- Proper `400` and `500` errors are returned on bad input or internal issues.

---

## 📌 Notes

- All data is stored in-memory. Restarting the server clears all contacts.
- Designed to be modular and scalable — easy to extend.
- No external database or internet connection is needed to run.

---

## 📬 Contact

If anything doesn't work or you'd like to improve or extend the app, feel free to reach out.
