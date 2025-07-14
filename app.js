const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Address Book!' });
});

app.use('/', contactRoutes); // All contact APIs

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
