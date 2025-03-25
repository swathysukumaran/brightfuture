const mongoose = require('mongoose');

const tutorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true }, // Added: Title/Specialization
  education: { type: String, required: true }, // Added: Education
  experience: { type: String, required: true }, // Added: Experience
  bio: { type: String, required: true },
  subjects: [{ type: String }], // Added: Array of subjects they tutor
  availability: [
    {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    },
  ],
  profilePicture: { type: String }, //Added: profile picture url.
});

module.exports = mongoose.model('Tutor', tutorsSchema);