import { useDispatch } from "react-redux";
import { resetAndFetchText } from "@/store/slices/typingSlice";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

const ResultsDisplay = ({ results }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[600px] mx-auto mt-8 sm:mt-16 px-4">
      <div className="flex justify-center gap-8 sm:gap-16">
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-4xl font-mono mb-1 sm:mb-2">
            {results.wpm}
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
            wpm
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-4xl font-mono mb-1 sm:mb-2">
            {results.accuracy}%
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
            accuracy
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl sm:text-4xl font-mono mb-1 sm:mb-2">
            {results.time}s
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
            time
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => dispatch(resetAndFetchText())}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
