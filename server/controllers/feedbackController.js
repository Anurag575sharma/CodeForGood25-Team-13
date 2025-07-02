import axios from "axios";

export const feedbackAnalysis = async (req, res) => {
  try {
    console.log(`[${new Date().toISOString()}] Feedback analysis started`);

    const startTime = Date.now();

    const feedbackData = `
Student Name,Feedback
Anjali,"The teaching methods are good, but the course pace feels fast"
Rahul,"I found the sessions engaging and the practical examples helpful"
Priya,"I struggled with understanding some concepts, more examples would help"
Amit,"The course content is relevant but more interactive activities needed"
`.trim();

    console.log(`[${new Date().toISOString()}] Feedback data prepared`);

    const prompt = `
You are an expert in analyzing student feedback.

Given the following feedback dataset, analyze the sentiments and summarize actionable suggestions for improvement.

Return only a JSON array containing:
- name: Student's name
- sentiment: "Positive", "Neutral", or "Negative"
- suggestion: One short, specific improvement suggestion

No explanations, no additional text, only valid JSON.

Dataset:
${feedbackData}

Output Example:
[
  {"name": "Anjali", "sentiment": "Neutral", "suggestion": "Consider slowing down course pace"},
  {"name": "Rahul", "sentiment": "Positive", "suggestion": "Maintain use of practical examples"}
]
`.trim();

    console.log(
      `[${new Date().toISOString()}] Prompt prepared, calling Deepseek`
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
      `[${new Date().toISOString()}] Deepseek responded in ${
        Date.now() - apiStart
      }ms`
    );

    const resultText =
      openRouterResponse?.data?.choices?.[0]?.message?.content || "[]";

    let feedbackResults = [];
    try {
      feedbackResults = JSON.parse(resultText);
      console.log(
        `[${new Date().toISOString()}] Feedback results parsed successfully`
      );
    } catch (parseErr) {
      console.log(
        `[${new Date().toISOString()}] Failed to parse Deepseek response`
      );
      return res.status(500).json({
        message: "Failed to parse model response.",
        rawResponse: resultText,
      });
    }

    console.log(
      `[${new Date().toISOString()}] Total time taken: ${
        Date.now() - startTime
      }ms`
    );

    return res.json({feedbackResults});
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] Feedback analysis failed`,
      err
    );
    return res.status(500).json({
      message: "Unexpected error during feedback analysis.",
      error: err.message || err,
    });
  }
};
