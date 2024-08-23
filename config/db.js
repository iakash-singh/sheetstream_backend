const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://asvlog7202:Hb5SnthvOCtoTpfa@sheetstream.ey37i.mongodb.net/?retryWrites=true&w=majority&appName=sheetstream');

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;