
export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface UserAnswer {
  questionId: number;
  answer: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  userAnswers: UserAnswer[];
  questions: Question[];
  durationSeconds: number;
}

export interface RankingEntry {
  name: string;
  score: number;
  percentage: number;
  date: string;
  durationSeconds: number;
}

export type GameState = 'welcome' | 'quiz' | 'results' | 'ranking';