import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
   tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Change to ObjectId
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);