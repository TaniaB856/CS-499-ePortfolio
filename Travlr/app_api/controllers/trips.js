const mongoose = require('mongoose');
require('../models/trips'); // ✅ ensures model is loaded
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET single trip
const tripsFindById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ADD trip
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({
        message: 'Trip could not be created.',
        error: err.message
    });
}
};

// UPDATE trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      req.body,
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({
        message: 'Trip could not be updated.',
        error: err.message
    });
}
};

// DELETE trip
const tripsDeleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.tripId);
    res.status(204).json(null);
  } catch (err) {
    res.status(500).json({
        message: 'Trip could not be deleted.',
        error: err.message
    });
}
};

module.exports = {
  tripsList,
  tripsFindById,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};