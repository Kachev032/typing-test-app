import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserInput,
  setStartTime,
  setActiveCharIndex,
  updateLastKeyTimes,
  setResults,
  resetTest,
  setTabPressed,
  fetchNewText,
  resetAndFetchText,
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

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        dispatch(setTabPressed(true));
        return;
      }

      if (e.key === "Enter" && isTabPressed) {
        e.preventDefault();
        dispatch(resetAndFetchText());
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
    },
    [
      dispatch,
      startTime,
      lastKeyTimes,
      activeCharIndex,
      userInput,
      currentText,
      isTabPressed,
    ]
  );

  const handleKeyUp = useCallback(
    (e) => {
      if (e.key === "Tab") {
        dispatch(setTabPressed(false));
      }
    },
    [dispatch]
  );

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
    dispatch(fetchNewText());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <TestDisplay
        text={currentText}
        activeCharIndex={activeCharIndex}
        userInput={userInput}
      />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default TypingTest;
