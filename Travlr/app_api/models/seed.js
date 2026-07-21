const mongoose = require('./db');
const fs = require('fs');
const path = require('path');
const Trip = require('./travlr');

// Read JSON file
const tripsPath = path.join(__dirname, '../../data/trips.json');
const tripsData = JSON.parse(fs.readFileSync(tripsPath, 'utf-8'));

// Seed database
const seedDB = async () => {
  try {
    await Trip.deleteMany({});
    console.log('Old data removed');

    await Trip.insertMany(tripsData);
    console.log('Database seeded successfully');

    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDB();