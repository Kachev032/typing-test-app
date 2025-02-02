const TestDisplay = ({ text, activeCharIndex, userInput }) => {
  const getCharStatus = (index) => {
    if (index >= activeCharIndex) return "future";
    if (index < userInput.length) {
      return text[index] === userInput[index] ? "correct" : "incorrect";
    }
    return "future";
  };

  // Split text into words while preserving spaces
  const words = text.split(/(?<=\s)|(?=\s)/);
  let charCount = 0;

  return (
    <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4">
      <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] font-mono tracking-wide text-center flex flex-wrap justify-center">
        {words.map((word, wordIndex) => {
          const chars = word.split("");
          const wordSpan = (
            <span key={wordIndex} className="inline-flex">
              {chars.map((char, i) => {
                const globalCharIndex = charCount + i;
                const status = getCharStatus(globalCharIndex);
                return (
                  <span key={i} className="relative">
                    <span
                      className={`${
                        status === "correct"
                          ? "text-primary"
                          : status === "incorrect"
                          ? "text-destructive"
                          : "text-muted-foreground/50"
                      } transition-colors duration-200`}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                    {globalCharIndex === activeCharIndex && (
                      <span className="absolute left-0 right-0 bottom-0 text-primary caret-pulse">
                        _
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
          );
          charCount += chars.length;
          return wordSpan;
        })}
      </div>
    </div>
  );
};

export default TestDisplay;
