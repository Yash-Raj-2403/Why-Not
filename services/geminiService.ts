import { GoogleGenAI } from "@google/genai";
import { ExplanationRequest } from '../types';

// Get API key from environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Fail loudly if API key is missing
if (!apiKey || apiKey === 'your_gemini_api_key_here') {
  throw new Error(
    '❌ Missing Gemini API Key!\n' +
    'Please create a .env file with:\n' +
    '  VITE_GEMINI_API_KEY=your_actual_api_key\n' +
    'Get your FREE API key from: https://aistudio.google.com/app/apikey'
  );
}

const ai = new GoogleGenAI({ apiKey });

// Rate limiting: Track request timestamps per user
const requestTracker = new Map<string, number[]>();
const MAX_REQUESTS_PER_MINUTE = 3;
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

const checkRateLimit = (userId: string): boolean => {
  const now = Date.now();
  const userRequests = requestTracker.get(userId) || [];
  
  // Remove requests older than 1 minute
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
    return false; // Rate limit exceeded
  }
  
  // Add current request
  recentRequests.push(now);
  requestTracker.set(userId, recentRequests);
  return true;
};

export const generateRejectionExplanation = async (
  data: ExplanationRequest, 
  userId: string = 'anonymous'
): Promise<string> => {
  // Check rate limit
  if (!checkRateLimit(userId)) {
    return "You've reached the maximum number of AI analysis requests (3 per minute). Please wait a moment before trying again.";
  }

  const modelId = "gemini-2.0-flash-exp"; // Latest model
  
  const prompt = `
    You are a Career Intelligence AI for the 'WhyNot' platform.
    Your goal is to explain a placement rejection to a student in a constructive, factual, and data-driven way.
    
    Context:
    Student: ${data.studentName}
    Major/CGPA: ${data.studentCgpa}
    Student Skills: ${data.studentSkills.join(', ')}
    
    Target Opportunity:
    Role: ${data.jobRole} at ${data.jobCompany}
    Required Skills: ${data.jobRequiredSkills.join(', ')}
    Minimum CGPA: ${data.jobMinCgpa}
    
    Task:
    Compare the Student's profile against the Target Opportunity requirements.
    Identify the specific gap (e.g., missing specific skills like SQL, or low CGPA).
    Generate a 3-4 sentence explanation.
    
    Sentiment & Tone Guidelines:
    - Maintain a Constructive and Encouraging sentiment.
    - Be factual about the gaps (honesty is key), but frame the rejection as a "path to improvement" rather than a failure.
    - Use a futuristic, professional, yet supportive tone.
    - Avoid harsh or discouraging language. Focus on growth potential.
    
    Ending: Provide one specific recommended action (e.g., "Complete the Advanced SQL certification").
    
    Format: Plain text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Minimize latency for UI responsiveness
      }
    });

    return response.text || "Unable to generate analysis at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Provide helpful error messages
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return "Invalid API key. Please check your Gemini API configuration.";
      }
      if (error.message.includes('quota') || error.message.includes('rate')) {
        return "API rate limit exceeded. Please try again in a few moments.";
      }
    }
    
    return "Our intelligence systems are currently recalibrating. Please try again later.";
  }
};