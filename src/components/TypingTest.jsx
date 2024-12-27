import { useState, useEffect } from "react";
import { getRandomText } from "@/utils/textGenerator";
import { calculateAccuracy, calculateWPM } from "@/utils/calculateMetrics";

import TestDisplay from "./TestDisplay";
import ResultsDisplay from "./ResultsDisplay";

const TypingTest = () => {
  const [currentText, setCurrentText] = useState(getRandomText());
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState(null);
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [lastKeyTimes, setLastKeyTimes] = useState({});

  const handleKeyDown = (e) => {
    if (results) return;

    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      return;
    }

    // Start timer on first keystroke
    if (!startTime && e.key.length === 1) {
      setStartTime(Date.now());
    }

    const currentTime = Date.now();
    const lastTime = lastKeyTimes[e.key] || 0;

    if (currentTime - lastTime < 50) {
      e.preventDefault();
      return;
    }

    setLastKeyTimes((prev) => ({
      ...prev,
      [e.key]: currentTime,
    }));

    if (e.key === "Backspace") {
      if (activeCharIndex > 0) {
        setUserInput((prev) => prev.slice(0, -1));
        setActiveCharIndex((prev) => prev - 1);
      }
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      setUserInput((prev) => prev + e.key);
      setActiveCharIndex((prev) => prev + 1);

      if (activeCharIndex + 1 === currentText.length) {
        completeTest();
      }
    }
  };

  const completeTest = () => {
    const endTime = Date.now();

    const results = {
      wpm: calculateWPM(currentText, startTime, endTime),
      accuracy: calculateAccuracy(currentText, userInput),
      time: ((endTime - startTime) / 1000).toFixed(2),
    };

    setResults(results);
  };

  const resetTest = () => {
    setCurrentText(getRandomText());
    setUserInput("");
    setStartTime(null);
    setResults(null);
    setActiveCharIndex(0);
    setLastKeyTimes({});
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [startTime, currentText, activeCharIndex, lastKeyTimes, results]);

  return (
    <div className="h-[calc(100vh-40px)] flex flex-col items-center justify-center p-4">
      <TestDisplay
        text={currentText}
        activeCharIndex={activeCharIndex}
        userInput={userInput}
      />
      {results && <ResultsDisplay results={results} onTryAgain={resetTest} />}
    </div>
  );
};

export default TypingTest;
