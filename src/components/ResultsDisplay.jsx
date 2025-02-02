import { useDispatch } from "react-redux";
import { resetAndFetchText } from "@/store/slices/typingSlice";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

const ResultsDisplay = ({ results }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-8 w-full max-w-[850px] px-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Results</h2>
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg mb-2">WPM</p>
          <p className="text-3xl font-mono">{results.wpm}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg mb-2">Accuracy</p>
          <p className="text-3xl font-mono">{results.accuracy}%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg mb-2">Time</p>
          <p className="text-3xl font-mono">{results.time}s</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => dispatch(resetAndFetchText())}
          variant="ghost"
          size="icon"
        >
          <RotateCcw className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
