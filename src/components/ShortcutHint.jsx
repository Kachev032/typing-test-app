import { Keyboard } from "lucide-react";

const ShortcutHint = () => {
  return (
    <div className="fixed bottom-16 sm:bottom-12 left-0 right-0 flex justify-center items-center p-4">
      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
        <Keyboard className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-[10px] sm:text-xs font-mono">
          Tab
        </kbd>
        <span>+</span>
        <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-[10px] sm:text-xs font-mono">
          Enter
        </kbd>
        <span>to restart test</span>
      </div>
    </div>
  );
};

export default ShortcutHint;
