
import React, { useState, useEffect } from 'react';
import { Question, UserAnswer, QuizResult } from '../types';
import { startNewQuiz, QUIZ_LENGTH } from '../services/quizService';

interface QuizScreenProps {
  onQuizComplete: (result: QuizResult) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onQuizComplete }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    setQuestions(startNewQuiz());
    setStartTime(Date.now());
  }, []);

  const handleAnswerSelect = (answer: string) => {
    if(isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    setTimeout(() => {
      const newUserAnswers = [
        ...userAnswers,
        { questionId: questions[currentQuestionIndex].id, answer },
      ];
      setUserAnswers(newUserAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        // Quiz finished
        const endTime = Date.now();
        const durationSeconds = Math.round((endTime - startTime) / 1000);

        let score = 0;
        newUserAnswers.forEach(ua => {
            const question = questions.find(q => q.id === ua.questionId);
            if(question && question.correctAnswer === ua.answer){
                score++;
            }
        });
        
        onQuizComplete({
            score: score,
            totalQuestions: questions.length,
            userAnswers: newUserAnswers,
            questions: questions,
            durationSeconds: durationSeconds,
        });
      }
    }, 1200);
  };

  if (questions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Cargando preguntas...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return "bg-gray-700 hover:bg-brand-blue";
    }
    if (option === selectedAnswer) {
      return option === currentQuestion.correctAnswer ? "bg-green-600" : "bg-red-600";
    }
    if (option === currentQuestion.correctAnswer) {
      return "bg-green-600";
    }
    return "bg-gray-700";
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 animate-fade-in">
      <div className="w-full max-w-3xl mx-auto bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-brand-blue/50">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 text-gray-400">
            <span className="text-sm font-semibold">Pregunta {currentQuestionIndex + 1} de {QUIZ_LENGTH}</span>
            <span className="text-sm font-bold text-brand-yellow">{currentQuestion.topic}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-brand-yellow h-2.5 rounded-full" style={{ width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out' }}></div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 min-h-[100px]">{currentQuestion.question}</h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg font-medium transition-all duration-300 text-white ${getButtonClass(option)} ${isAnswered ? 'cursor-not-allowed' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;