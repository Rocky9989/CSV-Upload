require('dotenv').config();
const mongoose = require('mongoose');

exports.connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log('✅ Connected to MongoDB => CSV Upload');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); // Stop the app if DB fails
  }
};
