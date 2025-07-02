import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
    required: true,
  },

  testDate: {
    type: Date,
    default: Date.now,
  },

  english: {
    type: Number,
  },

  maths: {
    type: Number,
  },

  remarks: {type: String},
});

const Result = mongoose.model("results", testResultSchema);
export default Result;
