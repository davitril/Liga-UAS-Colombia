
import { RankingEntry } from '../types';

const RANKING_KEY = 'uasQuizRanking';
const MAX_RANKING_ENTRIES = 10;

export const getRankings = (): RankingEntry[] => {
  try {
    const storedRankings = localStorage.getItem(RANKING_KEY);
    if (storedRankings) {
      return JSON.parse(storedRankings) as RankingEntry[];
    }
  } catch (error) {
    console.error("Failed to parse rankings from localStorage", error);
  }
  return [];
};

export const saveRanking = (newEntry: RankingEntry): void => {
  const currentRankings = getRankings();
  currentRankings.push(newEntry);

  const sortedRankings = currentRankings.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Tie-breaker: shorter duration ranks higher.
    // Handle older entries that might not have duration.
    const durationA = a.durationSeconds ?? Infinity;
    const durationB = b.durationSeconds ?? Infinity;
    return durationA - durationB;
  });

  const updatedRankings = sortedRankings.slice(0, MAX_RANKING_ENTRIES);

  try {
    localStorage.setItem(RANKING_KEY, JSON.stringify(updatedRankings));
  } catch (error) {
    console.error("Failed to save rankings to localStorage", error);
  }
};