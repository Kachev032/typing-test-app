const TestDisplay = ({ text, activeCharIndex, userInput }) => {
  const getCharStatus = (index) => {
    if (index >= activeCharIndex) return "future";
    if (index < userInput.length) {
      return text[index] === userInput[index] ? "correct" : "incorrect";
    }
    return "future";
  };

  return (
    <div className="min-h-[200px] flex items-center justify-center px-8">
      <div className="max-w-2xl text-center text-2xl font-mono leading-relaxed tracking-wide">
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
    </div>
  );
};

export default TestDisplay;
