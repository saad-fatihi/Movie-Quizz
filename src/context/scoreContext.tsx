import React, { useState } from "react";

type Result = {
  score: number;
  seconds: number;
  name?: string;
};

type ScoreContextType = {
  result?: Result | null;
  results: Result[];
  pushResult: (result: Result) => void;
  saveResult: (result: Omit<Result, "name"> & { name: string }) => void;
};

export const ScoreContext = React.createContext<ScoreContextType>({
  result: { score: 0, seconds: 0 },
  results: [],
  pushResult: (result) => false,
  saveResult: (result) => false,
});

export const ScoreProvider: React.FC = ({ children }) => {
  const [result, setResult] = useState<Result | null>(null);
  const [results, setResults] = useState<Result[]>([]);

  const initValue: ScoreContextType = {
    result,
    results,
    pushResult: (res) => setResult(res),
    saveResult: (res) =>
      setResults([res, ...results].sort((a, b) => b.score - a.score)),
  };

  return (
    <ScoreContext.Provider value={initValue}>{children}</ScoreContext.Provider>
  );
};
