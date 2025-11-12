import React, { useState } from 'react';
import { happyMalePilotImage } from '../assets/images';

interface WelcomeScreenProps {
  onStartQuiz: (name: string) => void;
  onViewRanking: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz, onViewRanking }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      onStartQuiz(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 animate-fade-in">
      <div className="text-center w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl border border-brand-blue/50">
        <img src={happyMalePilotImage} alt="Piloto de Drone" className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-brand-yellow object-cover" />
        <h1 className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">Liga UAS Colombia</h1>
        <p className="text-lg text-gray-300 mb-8">
          Prepárate para el examen de Piloto de Dron de la Aeronáutica Civil.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            placeholder="Ingresa tu nombre para comenzar"
            className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition duration-300"
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={handleStart}
              disabled={!name.trim()}
              className="flex-1 bg-brand-yellow text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Iniciar Simulacro
            </button>
            <button
              onClick={onViewRanking}
              className="flex-1 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300"
            >
              Ver Ranking
            </button>
          </div>
        </div>
      </div>
       <footer className="mt-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Liga UAS Colombia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default WelcomeScreen;