import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: {type: String, required: true},
  age: {type: Number, required: true},
  gender: {type: String, enum: ["male", "female", "other"], required: true},

  status: {
    type: String,
    enum: ["active", "inactive", "completed"],
    default: "active",
  },

  attendance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "attendancestudents",
  },

  english: {
    type: [Number],
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length === 4;
      },
      message: () =>
        `English array must contain exactly 4 numeric marks: [read, listen, write, speak]`,
    },
    default: [0, 0, 0, 0],
  },

  maths: {
    type: [Number],
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length === 5;
      },
      message: () =>
        "Maths array must contain exactly 5 marks: [arithmetic, algebra, geometry, data_measurement, problem_solving]",
    },
    default: [0, 0, 0, 0, 0],
  },
});
const Student = mongoose.model("students", studentSchema);
export default Student;
