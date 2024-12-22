import { Button } from "./ui/button";

const ResultsDisplay = ({ results }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-semibold">WPM</p>
          <p className="text-2xl">{results.wpm}</p>
        </div>
        <div>
          <p className="font-semibold">Accuracy</p>
          <p className="text-2xl">{results.accuracy}%</p>
        </div>
        <div>
          <p className="font-semibold">Time</p>
          <p className="text-2xl">{results.time}</p>
        </div>
      </div>
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </div>
  );
};

export default ResultsDisplay;
