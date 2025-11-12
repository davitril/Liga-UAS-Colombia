
import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const getExplanation = async (question: Question): Promise<string> => {
  if (!ai) {
    return Promise.resolve("La función de explicación con IA está deshabilitada porque la clave de API de Gemini no está configurada.");
  }

  const prompt = `
    Eres un instructor experto en regulaciones de drones (UAS) en Colombia.
    Explica el siguiente concepto de manera clara y concisa para un estudiante que se prepara para su examen de piloto.

    Tema: "${question.topic}"
    Pregunta: "${question.question}"
    Respuesta correcta: "${question.correctAnswer}"

    Por favor, proporciona una explicación detallada de por qué la respuesta correcta es esa y el contexto general del concepto.
    Usa un lenguaje fácil de entender. Formatea tu respuesta en Markdown.
    `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching explanation from Gemini:", error);
    return "Hubo un error al contactar al servicio de IA. Por favor, intenta de nuevo más tarde.";
  }
};
