
import React, { useState, useEffect } from 'react';
import { RankingEntry } from '../types';
import { getRankings } from '../services/rankingService';

interface RankingScreenProps {
  onBackToHome: () => void;
}

const TrophyIcon: React.FC<{ rank: number }> = ({ rank }) => {
    const colors: { [key: number]: string } = {
        1: 'text-yellow-400',
        2: 'text-gray-400',
        3: 'text-yellow-600',
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors[rank] || 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.64 3.14A1 1 0 0010 4v2.035a4.002 4.002 0 01-1.28-1.55A1 1 0 007.28 3.3a4.002 4.002 0 00-1.218 3.993A3.97 3.97 0 006 8H4a1 1 0 00-1 1v2a1 1 0 001 1h2c0 .285.04.562.115.83a4.002 4.002 0 005.77 2.164 1 1 0 00.3-1.436 4.002 4.002 0 01-1.631-3.235V4a1 1 0 00-.36-.76zM13 8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-2 9a1 1 0 100 2h4a1 1 0 100-2h-4z" clipRule="evenodd" />
        </svg>
    );
};


const RankingScreen: React.FC<RankingScreenProps> = ({ onBackToHome }) => {
  const [rankings, setRankings] = useState<RankingEntry[]>([]);

  useEffect(() => {
    setRankings(getRankings());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 animate-fade-in">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl border border-brand-blue/50">
        <h1 className="text-4xl font-bold text-center text-brand-yellow mb-8">Mejores Puntajes</h1>

        <div className="space-y-3">
          {rankings.length > 0 ? (
            rankings.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-700 p-4 rounded-lg transition-transform transform hover:scale-105"
              >
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-400 w-8">{index + 1}.</span>
                  <TrophyIcon rank={index + 1} />
                  <span className="ml-4 font-semibold text-white">{entry.name}</span>
                </div>
                <div className="text-right">
                    <span className="font-bold text-lg text-brand-yellow">{entry.score} pts</span>
                    <span className="text-sm text-gray-400 ml-2">({entry.percentage}%)</span>
                    {entry.durationSeconds && isFinite(entry.durationSeconds) && (
                         <p className="text-xs text-gray-500 mt-1">Tiempo: {entry.durationSeconds}s</p>
                    )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-8">Aún no hay puntajes. ¡Sé el primero en jugar!</p>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onBackToHome}
            className="bg-brand-yellow text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankingScreen;
