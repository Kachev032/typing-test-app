import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getRandomText } from "@/utils/textGenerator";
import { calculateAccuracy, calculateWPM } from "@/utils/calculateMetrics";

import StartButton from "./StartButton";
import TestDisplay from "./TestDisplay";
import ResultsDisplay from "./ResultsDisplay";

const TypingTest = () => {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [isTestActive, setIsTestActive] = useState(false);
  const [results, setResults] = useState(null);
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [lastKeyTimes, setLastKeyTimes] = useState({}); // Track last press time for each key

  const startTest = () => {
    const text = getRandomText();
    setCurrentText(text);
    setUserInput("");
    setActiveCharIndex(0);
    setStartTime(Date.now());
    setIsTestActive(true);
    setResults(null);
    setLastKeyTimes({});
  };

  const handleKeyDown = (e) => {
    if (!isTestActive) return;

    // Prevent default behavior for tab and enter
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      return;
    }

    const currentTime = Date.now();
    const lastTime = lastKeyTimes[e.key] || 0;

    // If the key was pressed too recently, ignore it (prevent key repeat)
    if (currentTime - lastTime < 50) {
      e.preventDefault();
      return;
    }

    // Update the last press time for this key
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

    // Only handle single character inputs
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      setUserInput((prev) => prev + e.key);
      setActiveCharIndex((prev) => prev + 1);

      // Check if test is complete
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
    setIsTestActive(false);
  };

  useEffect(() => {
    if (isTestActive) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isTestActive, currentText, activeCharIndex, lastKeyTimes]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Typing Speed Test</CardTitle>
        </CardHeader>
        <CardContent>
          {!isTestActive && !results && <StartButton onClick={startTest} />}

          {isTestActive && (
            <TestDisplay
              text={currentText}
              activeCharIndex={activeCharIndex}
              userInput={userInput}
            />
          )}

          {results && (
            <ResultsDisplay results={results} onRestart={startTest} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingTest;
