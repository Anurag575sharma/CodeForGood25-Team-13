import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from "axios";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import womenRoutes from "./routes/women.route.js";
import feedbackRoutes from "./routes/feedbackRoute.js";

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS settings to support frontend on localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend
    credentials: true, // Allow sending cookies
  })
);

// Middlewares
app.use(express.json()); // JSON body parser
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/students", studentRoutes); // Assuming student routes are similar to auth
app.use("/api/v1/women", womenRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Server running on 8000");
});
app.get("/predict-dropout", async (req, res) => {
  try {
    console.log(`[${new Date().toISOString()}] ➡️ Dropout prediction started`);

    const startTime = Date.now();

    const csvData = `...`; // Your CSV data remains same

    console.log(`[${new Date().toISOString()}] ✅ CSV data ready`);

    const prompt = `
You are an educational dropout prediction expert.

Based on the following student dataset, predict for each student whether they are likely to drop out (1 means will drop out, 0 means not).

Consider GPA_score, test_score, attendance, socioeconomic status, and parental education as key factors.

Return only a JSON array with 'name' and 'predicted_dropout' fields. No explanation, just JSON.

Dataset:
${csvData}

Output Example:
[
  {"name": "babita", "predicted_dropout": 0},
  {"name": "deepa rani", "predicted_dropout": 1}
]
`.trim();

    console.log(
      `[${new Date().toISOString()}] 🛠️ Prompt prepared, calling Deepseek...`
    );

    let openRouterResponse;
    const apiStart = Date.now();
    try {
      openRouterResponse = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "deepseek/deepseek-r1-0528:free",
          messages: [{role: "user", content: prompt}],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          timeout: 20000,
        }
      );
    } catch (apiErr) {
      console.log(`[${new Date().toISOString()}] Deepseek API call failed`);
      return res.status(500).json({
        message: "OpenRouter API call failed.",
        error: apiErr?.response?.data || apiErr.message,
      });
    }
    console.log(
      `[${new Date().toISOString()}]  Deepseek responded in ${
        Date.now() - apiStart
      }ms`
    );

    const resultText =
      openRouterResponse?.data?.choices?.[0]?.message?.content || "[]";

    let predictions = [];
    try {
      predictions = JSON.parse(resultText);
      console.log(
        `[${new Date().toISOString()}] 📊 Predictions parsed successfully`
      );
    } catch (parseErr) {
      console.log(`[${new Date().toISOString()}]  Failed to parse response`);
      return res.status(500).json({
        message: "Failed to parse model response.",
        rawResponse: resultText,
      });
    }

    console.log(
      `[${new Date().toISOString()}] ✅ Total time taken: ${
        Date.now() - startTime
      }ms`
    );

    return res.json({predictions});
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}]  Dropout prediction failed:`,
      err
    );
    return res.status(500).json({
      message: "Unexpected error during prediction.",
      error: err.message || err,
    });
  }
});

app.use("/api/v1/feedback", feedbackRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
