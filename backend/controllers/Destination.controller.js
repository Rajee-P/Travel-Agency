import Destination from '../models/Destination.model.js';

export const getDestinations = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const destinations = await Destination.find().limit(limit);
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destinations', error });
  }
};

// Get a single destination by ID (MongoDB _id)
export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination', error });
  }
};

export const addMultipleDestinations = async (req, res) => {
  try {
    const destinations = req.body;
    if (!Array.isArray(destinations) || destinations.length === 0) {
      return res.status(400).json({ message: 'Please provide an array of destinations.' });
    }
    const insertedDestinations = await Destination.insertMany(destinations);
    res.status(201).json(insertedDestinations);
  } catch (error) {
    res.status(500).json({ message: 'Error inserting destinations', error });
  }
};
