require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoute');
const bookingRoutes = require('./routes/bookingRoute');
const cors = require('cors');

app.use(cors());  
app.use('/api/bookings', bookingRoutes);  
app.use('/api/auth', authRoutes);          
app.use('/api/contact', contactRoutes);   

app.get('/', (req, res) => {
  res.send('API is working!');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
