import Package from '../models/Package.model.js';

// Get all packages
export const getPackages = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0; // Optional ?limit=3
    const packages = limit > 0
      ? await Package.find().limit(limit)
      : await Package.find();

    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Packages', error });
  }
};

// Get package by ID
export const getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.status(200).json(pkg);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Package', error });
  }
};

// Add multiple packages
export const addMultiplePackages = async (req, res) => {
  try {
    const packages = req.body; // Expecting array of packages
    if (!Array.isArray(packages) || packages.length === 0) {
      return res.status(400).json({ message: 'Please provide an array of Packages.' });
    }
    const insertedPackages = await Package.insertMany(packages);
    res.status(201).json(insertedPackages);
  } catch (error) {
    res.status(500).json({ message: 'Error inserting Packages', error });
  }
};
