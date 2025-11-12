import React, { useEffect, useState, useCallback } from 'react';
import { QuizResult, RankingEntry, Question } from '../types';
import { saveRanking } from '../services/rankingService';
import { getExplanation } from '../services/geminiService';
import ExplanationModal from './ExplanationModal';
import { 
    happyMalePilotImage, 
    happyFemalePilotImage, 
    normalMalePilotImage, 
    normalFemalePilotImage, 
    sadMalePilotImage, 
    sadFemalePilotImage 
} from '../assets/images';


interface ResultsScreenProps {
  userName: string;
  result: QuizResult;
  onPlayAgain: () => void;
  onViewRanking: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ userName, result, onPlayAgain, onViewRanking }) => {
  const [explanation, setExplanation] = useState<string>('');
  const [isLoadingExplanation, setIsLoadingExplanation] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const percentage = Math.round((result.score / result.totalQuestions) * 100);

  useEffect(() => {
    const newEntry: RankingEntry = {
      name: userName,
      score: result.score,
      percentage: percentage,
      date: new Date().toISOString(),
      durationSeconds: result.durationSeconds,
    };
    saveRanking(newEntry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, result.score, percentage, result.durationSeconds]);

  const getResultFeedback = (percentage: number) => {
    const isMale = Math.random() < 0.5; // Randomly choose gender for the image

    if (percentage >= 71) {
      return {
        message: "Eres un dios del conocimiento, ve y conquista el mundo.",
        imageUrl: isMale ? happyMalePilotImage : happyFemalePilotImage,
        imageAlt: isMale ? "Piloto de drone feliz (hombre)" : "Piloto de drone feliz (mujer)",
      };
    } else if (percentage >= 50) {
      return {
        message: "Resultado normal, aun no impresionas a nadie.",
        imageUrl: isMale ? normalMalePilotImage : normalFemalePilotImage,
        imageAlt: isMale ? "Piloto de drone con resultado normal (hombre)" : "Piloto de drone con resultado normal (mujer)",
      };
    } else {
      return {
        message: "Eres una vergüenza, estudia más.",
        imageUrl: isMale ? sadMalePilotImage : sadFemalePilotImage,
        imageAlt: isMale ? "Piloto de drone triste por un mal resultado (hombre)" : "Piloto de drone triste por un mal resultado (mujer)",
      };
    }
  };

  const feedback = getResultFeedback(percentage);

  const incorrectAnswers = result.userAnswers.filter(ua => {
    const question = result.questions.find(q => q.id === ua.questionId);
    return question && question.correctAnswer !== ua.answer;
  });

  const handleGetExplanation = useCallback(async (question: Question) => {
    setSelectedQuestion(question);
    setIsLoadingExplanation(true);
    const expl = await getExplanation(question);
    setExplanation(expl);
    setIsLoadingExplanation(false);
  }, []);
  
  const closeModal = () => {
    setSelectedQuestion(null);
    setExplanation('');
  }

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 animate-fade-in">
      <div className="w-full max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl border border-brand-blue/50">
        <div className="text-center mb-8">
            <img src={feedback.imageUrl} alt={feedback.imageAlt} className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-brand-yellow object-cover" />
            <h1 className="text-3xl font-bold text-brand-yellow">{feedback.message}</h1>
            <p className="text-xl text-gray-300 mt-4">¡Estos son tus resultados, {userName}!</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg text-center mb-8">
          <p className="text-lg text-gray-400">Tu puntaje</p>
          <p className="text-6xl font-bold text-white my-2">{result.score} <span className="text-3xl text-gray-400">/ {result.totalQuestions}</span></p>
          <p className={`text-3xl font-bold ${percentage >= 71 ? 'text-green-400' : percentage >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>{percentage}%</p>
          <p className="text-md text-gray-400 mt-2">Tiempo: {result.durationSeconds} segundos</p>
        </div>

        {incorrectAnswers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Respuestas a revisar:</h3>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {incorrectAnswers.map((ua) => {
                const question = result.questions.find(q => q.id === ua.questionId);
                if (!question) return null;
                return (
                  <div key={question.id} className="bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-200">{question.question}</p>
                    <p className="text-sm text-red-400 mt-1">Tu respuesta: {ua.answer}</p>
                    <p className="text-sm text-green-400">Respuesta correcta: {question.correctAnswer}</p>
                     <button 
                        onClick={() => handleGetExplanation(question)}
                        className="text-xs mt-2 bg-brand-blue/50 text-brand-yellow px-2 py-1 rounded hover:bg-brand-blue transition-colors">
                        Ver Explicación (con IA)
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPlayAgain}
            className="w-full sm:w-auto bg-brand-yellow text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            Jugar de Nuevo
          </button>
          <button
            onClick={onViewRanking}
            className="w-full sm:w-auto bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300"
          >
            Ver Ranking
          </button>
        </div>
      </div>
    </div>
    {selectedQuestion && (
        <ExplanationModal 
            isLoading={isLoadingExplanation} 
            explanation={explanation}
            question={selectedQuestion}
            onClose={closeModal}
        />
    )}
    </>
  );
};

export default ResultsScreen;