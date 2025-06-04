const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/jewelers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const User = require('./models/User');

// Signup POST route
app.post('/signup', async (req, res) => {
  const { username, phone, email } = req.body;

  try {
    const user = new User({ username, phone, email });
    await user.save();
    res.status(200).json({ message: 'User signed up successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to sign up user' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
