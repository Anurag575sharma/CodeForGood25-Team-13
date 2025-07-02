import express from "express";
import {feedbackAnalysis} from "../controllers/feedbackController.js";

const router = express.Router();

router.get("/analyze-feedback", feedbackAnalysis);

export default router;
