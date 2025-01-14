import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserInput,
  setStartTime,
  setActiveCharIndex,
  updateLastKeyTimes,
  setResults,
  resetTest,
  setTabPressed,
} from "@/store/slices/typingSlice";
import { calculateAccuracy, calculateWPM } from "@/utils/calculateMetrics";
import TestDisplay from "./TestDisplay";
import ResultsDisplay from "./ResultsDisplay";

const TypingTest = () => {
  const dispatch = useDispatch();
  const {
    currentText,
    userInput,
    startTime,
    results,
    activeCharIndex,
    lastKeyTimes,
    isTabPressed,
  } = useSelector((state) => state.typing);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      dispatch(setTabPressed(true));
      return;
    }

    if (e.key === "Enter" && isTabPressed) {
      e.preventDefault();
      dispatch(resetTest());
      return;
    }

    // Start timer on first keystroke
    if (!startTime && e.key.length === 1) {
      dispatch(setStartTime(Date.now()));
    }

    const currentTime = Date.now();
    const lastTime = lastKeyTimes[e.key] || 0;

    if (currentTime - lastTime < 50) {
      e.preventDefault();
      return;
    }

    dispatch(
      updateLastKeyTimes({
        key: e.key,
        time: currentTime,
      })
    );

    if (e.key === "Backspace") {
      if (activeCharIndex > 0) {
        dispatch(setUserInput(userInput.slice(0, -1)));
        dispatch(setActiveCharIndex(activeCharIndex - 1));
      }
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      dispatch(setUserInput(userInput + e.key));
      dispatch(setActiveCharIndex(activeCharIndex + 1));

      if (activeCharIndex + 1 === currentText.length) {
        completeTest();
      }
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Tab") {
      dispatch(setTabPressed(false));
    }
  };

  const completeTest = () => {
    const endTime = Date.now();

    const results = {
      wpm: calculateWPM(currentText, startTime, endTime),
      accuracy: calculateAccuracy(currentText, userInput),
      time: ((endTime - startTime) / 1000).toFixed(2),
    };

    dispatch(setResults(results));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    startTime,
    currentText,
    activeCharIndex,
    lastKeyTimes,
    results,
    userInput,
    isTabPressed,
  ]);

  return (
    <div className="h-[calc(100vh-40px)] flex flex-col items-center justify-center p-4">
      <TestDisplay
        text={currentText}
        activeCharIndex={activeCharIndex}
        userInput={userInput}
      />
      {results && (
        <ResultsDisplay
          results={results}
          onTryAgain={() => dispatch(resetTest())}
        />
      )}
    </div>
  );
};

export default TypingTest;
