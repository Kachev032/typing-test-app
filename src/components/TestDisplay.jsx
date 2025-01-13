const TestDisplay = ({ text, activeCharIndex, userInput }) => {
  const getCharStatus = (index) => {
    if (index >= activeCharIndex) return "future";
    if (index < userInput.length) {
      return text[index] === userInput[index] ? "correct" : "incorrect";
    }
    return "future";
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1350px] px-10">
        <div className="text-2xl font-mono leading-relaxed tracking-wide break-words text-center">
          {text.split("").map((char, index) => {
            const status = getCharStatus(index);
            return (
              <span key={index} className="relative inline-block">
                <span
                  className={`${
                    status === "correct"
                      ? "text-green-600"
                      : status === "incorrect"
                      ? "text-red-600"
                      : "text-gray-600"
                  } transition-colors duration-200`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
                {index === activeCharIndex && (
                  <span className="absolute left-0 right-0 bottom-0 text-blue-600">
                    _
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestDisplay;
