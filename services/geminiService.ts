
import { GoogleGenAI, Type } from "@google/genai";
import { KidFriendlyDrugInfo } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchKidFriendlyDrugInfo = async (drugName: string): Promise<KidFriendlyDrugInfo> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Explain the medicine "${drugName}" for highly curious 10-14 year olds. 
    Role: You are a professional medical educator partnering with SALSA (Students Advocating for Life without Substance Abuse).
    
    - The "superpower" should explain the physiological mechanism using a simple metaphor but accurate biological concepts (like receptors and keys).
    - The "originStory" should provide a brief scientific or historical context.
    - The "rulebook" should be clear, professional safety rules.
    - The "categoryName" should be a professional yet catchy category.
    - The "overdoseFacts" is CRITICAL: Explain exactly what happens to the body's systems (liver, heart, breathing, etc.) if too much of this specific medication is taken or if it is misused. Be factual and serious.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          categoryName: { type: Type.STRING },
          superpower: { type: Type.STRING },
          originStory: { type: Type.STRING },
          rulebook: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          coolFact: { type: Type.STRING },
          overdoseFacts: { type: Type.STRING }
        },
        required: ["name", "categoryName", "superpower", "originStory", "rulebook", "coolFact", "overdoseFacts"]
      }
    }
  });

  const jsonStr = response.text.trim();
  return JSON.parse(jsonStr);
};
