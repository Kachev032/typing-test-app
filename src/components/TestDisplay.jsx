const TestDisplay = ({ text, activeCharIndex, userInput }) => {
  const getCharStatus = (index) => {
    if (index >= activeCharIndex) return "future";
    if (index < userInput.length) {
      return text[index] === userInput[index] ? "correct" : "incorrect";
    }
    return "future";
  };

  return (
    <div className="text-2xl mb-4 h24 flex items-center justify-center gap-2">
      {text.split("").map((char, index) => {
        const status = getCharStatus(index);
        return (
          <span
            key={index}
            className={`${
              status === "correct"
                ? "text-green-600"
                : status === "incorrect"
                ? "text-red-600"
                : "text-gray-400ww"
            } transition-colors duration-200`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TestDisplay;
