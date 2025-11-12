
import React from 'react';
import { Question } from '../types';

interface ExplanationModalProps {
  isLoading: boolean;
  explanation: string;
  question: Question;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-yellow"></div>
  </div>
);

// A simple markdown parser
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n');
    return (
        <>
            {lines.map((line, i) => {
                if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-lg font-bold mt-3 mb-1 text-brand-yellow">{line.substring(4)}</h3>
                }
                if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-bold mt-4 mb-2 text-brand-yellow">{line.substring(3)}</h2>
                }
                if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-2xl font-bold mt-4 mb-2 text-brand-yellow">{line.substring(2)}</h1>
                }
                if (line.startsWith('* ')) {
                    return <li key={i} className="ml-5 list-disc">{line.substring(2)}</li>
                }
                if (line.trim() === '') {
                    return <br key={i} />
                }
                return <p key={i} className="my-1">{line}</p>
            })}
        </>
    );
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ isLoading, explanation, question, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-brand-blue/50">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-brand-yellow">Explicación con IA</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="mb-4 p-4 bg-gray-900 rounded-lg">
            <p className="text-sm text-gray-400">Pregunta:</p>
            <p className="font-semibold text-gray-200">{question.question}</p>
          </div>
          <div className="min-h-[200px]">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="text-gray-300 prose prose-invert prose-p:my-2 prose-h3:text-brand-yellow">
                 <SimpleMarkdown text={explanation} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
