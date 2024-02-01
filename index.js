// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/onlineTreatment', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },
  city: String
});


userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

app.post('/api/users', async (req, res) => {
  try {
    const { fullname, email, password} = req.body;
    const newUser = new User({ fullname, email, password});
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send('User not found');
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).send('Invalid password');
      }
      res.status(200).send('Login successful');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
