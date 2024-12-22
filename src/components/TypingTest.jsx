import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getRandomText } from "@/utils/textGenerator";
import { calcualteAccuracy, calculateWPM } from "@/utils/calculateMetrics";

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

  const startTest = () => {
    const text = getRandomText();
    setCurrentText(text);
    setUserInput("");
    setActiveCharIndex(0);
    setIsTestActive(true);
    setStartTime(Date.now());
    setResults(null);
  };

  const handleKeyPress = (e) => {
    if (!isTestActive) return;

    if (e.key === "Backspace") {
      if (activeCharIndex > 0) {
        setUserInput((prev) => prev.slice(0, -1));
        setActiveCharIndex((prev) => prev - 1);
      }
      return;
    }

    if (e.key.length !== 1 || e.metaKey || e.ctrlKey) return;
    setUserInput((prev) => prev + e.key);
    setActiveCharIndex((prev) => prev + 1);
    if (activeCharIndex + 1 === currentText.length) {
      completeTest();
      //why is completeTest useable here considering it's defined below?
    }
  };

  const completeTest = () => {
    const endTime = Date.now();

    const results = {
      wpm: calculateWPM(currentText, startTime, endTime),
      accuracy: calcualteAccuracy(currentText, userInput),
      time: ((endTime - startTime) / 1000).toFixed(2),
    };

    setResults(results);
    setIsTestActive(false);
  };

  useEffect(() => {
    if (isTestActive) {
      window.addEventListener("keypress", handleKeyPress);
      return () => {
        window.addEventListener("keydown", handleKeyDown);
      };
    }
  }, [isTestActive, currentText, activeCharIndex]);

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Typing Test</CardTitle>
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
