import User from '../models/User.model.js'

// Create a new user

export const createUser = async (req, res) => {
   try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
};

// Get all users
export const getUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.json(users);
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};

// Update a user by ID
export const updateUser = async (req, res) => {
   try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
   try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted successfully' });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};

export const login = async (req, res) => {
   try{
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: 'User not found' });

      const isMatch = user.password === password;
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

      res.json({ message: 'Login successful', user });
   }
   catch (err) {
      res.status(500).json({ error: err.message });
   }
};