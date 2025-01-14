import { Keyboard } from "lucide-react";

const ShortcutHint = () => {
  return (
    <div className="fixed bottom-12 left-0 right-0 flex justify-center items-center p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Keyboard className="w-4 h-4" />
        <span>Press</span>
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Tab</kbd>
        <span>+</span>
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">
          Enter
        </kbd>
        <span>to restart test</span>
      </div>
    </div>
  );
};

export default ShortcutHint;
