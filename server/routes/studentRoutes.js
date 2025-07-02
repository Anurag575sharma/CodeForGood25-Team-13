import express from "express";
import {
  addMarksController,
  getAllStudentsController,
  getAttendanceController,
  getMarksController,
  getPerformanceController,
  markAttendanceController,
  registerController,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/register", registerController);
router.get("/allstudents", getAllStudentsController);
router.post("/mark-attendance", markAttendanceController);
router.get("/attendance", getAttendanceController);
router.post("/addmarks", addMarksController);
router.get("/performance/:studentId", getPerformanceController);
router.get("/marks/:studentId", getMarksController);

export default router;
