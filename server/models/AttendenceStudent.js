import mongoose from "mongoose";
import Student from "./Student.js";

const attendanceSchemaStudent = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
    required: true,
  },
  month: {
    type: String, // yyyy-mm format
    required: true,
  },
  records: {
    type: Map,
    of: {
      day: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: [0, 1],
        required: true,
      },
    },
  },
  present_days: {
    type: Number,
    default: 0,
  },
  absent_days: {
    type: Number,
    default: 0,
  },
  current_absent_streak: {
    type: Number,
    default: 0,
  },
  current_present_streak: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const AttendanceSchemaStudent = mongoose.model(
  "attendancestudents",
  attendanceSchemaStudent
);

export default AttendanceSchemaStudent;
