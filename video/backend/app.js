const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/video-app').then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
