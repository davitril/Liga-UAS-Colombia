import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import RankingScreen from './components/RankingScreen';
import { GameState, QuizResult } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [userName, setUserName] = useState<string>('');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = useCallback((name: string) => {
    setUserName(name);
    setGameState('quiz');
  }, []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    setQuizResult(result);
    setGameState('results');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setQuizResult(null);
    // Keep username for convenience
    setGameState('quiz');
  }, []);

  const handleViewRanking = useCallback(() => {
    setGameState('ranking');
  }, []);

  const handleBackToHome = useCallback(() => {
    setQuizResult(null);
    setUserName('');
    setGameState('welcome');
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'quiz':
        return <QuizScreen onQuizComplete={handleQuizComplete} />;
      case 'results':
        if (quizResult) {
          return (
            <ResultsScreen
              userName={userName}
              result={quizResult}
              onPlayAgain={handlePlayAgain}
              onViewRanking={handleViewRanking}
            />
          );
        }
        // Fallback if result is null
        return <WelcomeScreen onStartQuiz={handleStartQuiz} onViewRanking={handleViewRanking} />;
      case 'ranking':
        return <RankingScreen onBackToHome={handleBackToHome} />;
      case 'welcome':
      default:
        return <WelcomeScreen onStartQuiz={handleStartQuiz} onViewRanking={handleViewRanking} />;
    }
  };

  return <div className="font-sans">{renderContent()}</div>;
};

export default App;