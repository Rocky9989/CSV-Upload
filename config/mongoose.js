require('dotenv').config();
const mongoose = require('mongoose');

exports.connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Add this option
      serverSelectionTimeoutMS: 5000, // Reduce timeout
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};
