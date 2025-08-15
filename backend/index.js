// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/User.routes.js';
import destinationRoutes from './routes/Destination.routes.js';
import PackageRoutes from './routes/Package.routes.js';
import bookingRoutes from './routes/Booking.routes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', PackageRoutes);
app.use('/api/bookings', bookingRoutes);
// Example API route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


// Port from .env or default 5000
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => {
        console.log("Connected to MongoDB");
        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB connection failed:", err.message));
