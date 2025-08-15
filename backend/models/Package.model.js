import mongoose from 'mongoose';

const GuideSchema = new mongoose.Schema({
   name: { type: String, required: true },
   experience: { type: String, required: true }
});

const PackageSchema = new mongoose.Schema({
   id: { type: String, required: true, unique: true },
   title: { type: String, required: true },
   about: { type: String, required: true },
   places: [{ type: String, required: true }],
   duration: { type: String, required: true },
   guide: { type: GuideSchema, required: true },
   image: { type: String, required: true },
   hotels: [{ type: String, required: true }],
   price: { type: Number, required: true }
});

const Package = mongoose.model('Package', PackageSchema);
export default Package;