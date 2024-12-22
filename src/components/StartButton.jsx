import { Button } from "@/components/ui/button";

const StartButton = ({ onClick, disabled = false }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={onClick} disabled={disabled} className="w-32 mb-4">
        Start
      </Button>
    </div>
  );
};

export default StartButton;
