export const calculateAccuracy = (originalText, typedText) => {
  let correctChars = 0;
  const minLength = Math.min(originalText.length, typedText.length);

  for (let i = 0; i < minLength; i++) {
    if (originalText[i] === typedText[i]) {
      correctChars++;
    }
  }

  return Math.round((correctChars / minLength) * 100);
};

export const calculateWPM = (text, startTime, endTime) => {
  const timeInSeconds = (endTime - startTime) / 1000;
  const wordsTyped = text.trim().split(/\s+/).length;
  return Math.round((wordsTyped / timeInSeconds) * 60);
};
