import Result from "../models/Result.js";
import {
  addMarks,
  getAllStudents,
  getAttendance,
  getPerformance,
  markAttendance,
  registerStudent,
} from "../services/student.service.js";

export const registerController = async (req, res) => {
  const result = await registerStudent(req.body);
  if (!result.success) return res.status(400).json(result);
  res.status(201).json(result);
};

export const getAllStudentsController = async (req, res) => {
  const result = await getAllStudents(req.query);
  if (!result.success) return res.status(500).json(result);
  res.status(200).json(result);
};

export const markAttendanceController = async (req, res) => {
  const result = await markAttendance(req.body);
  if (!result.success) return res.status(400).json(result);
  res.status(200).json(result);
};

export const getAttendanceController = async (req, res) => {
  const result = await getAttendance(req.query);
  if (!result.success) return res.status(404).json(result);
  res.status(200).json(result);
};

export const addMarksController = async (req, res) => {
  const result = await addMarks(req.body);
  if (!result.success) return res.status(400).json(result);
  res.status(201).json(result);
};

export const getPerformanceController = async (req, res) => {
  const {studentId} = req.params;
  if (!studentId) {
    return res
      .status(400)
      .json({success: false, message: "Student ID is required"});
  }

  const result = await getPerformance(studentId);
  if (!result.success) return res.status(404).json(result);
  res.status(200).json(result);
};

// get marks for student id
export const getMarksController = async (req, res) => {
  const {studentId} = req.params;
  if (!studentId) {
    return res
      .status(400)
      .json({success: false, message: "Student ID is required"});
  }

  try {
    const marks = await Result.find({studentId}).lean();
    if (!marks || marks.length === 0) {
      return res.status(404).json({success: false, message: "No marks found"});
    }
    res.status(200).json({success: true, marks});
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: "Failed to fetch marks"});
  }
};
