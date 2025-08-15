import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   slug: {
      type: String,
      required: true,
      unique: true
   },
   image: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   places: {
      type: [String],
      required: true
   },
   days: {
      type: Number,
      required: true
   },
   nights: {
      type: Number,
      required: true
   },
   hotels: {
      type: [String],
      required: true
   },
   price: {
      type: Number,
      required: true
   }
}, { timestamps: true });

const Destination = mongoose.model('Destination', DestinationSchema);
export default Destination;