const sampleText = [
  "The quick brown fox jumps over the lazy dog.",
  "Hello, world! This is a sample text.",
  "JavaScript is a programming language used to create interactive effects within web browsers.",
  "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
  "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
];

export const getRandomText = () => {
  return sampleText[Math.floor(Math.random() * sampleText.length)];
};

export const generateTexts = (difficult = "medium", count = 10) => {
  return sampleText;
};
