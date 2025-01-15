import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { togglePatchNotes } from "@/store/slices/modalSlice";

const PatchNotesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isPatchNotesOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Patch Notes</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(togglePatchNotes())}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Version 0.0.1</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Changed state managment to Redux Toolkit for better
                  scalability
                </li>
                <li>
                  Implemented a quick restart keyboard shortcut, so users can
                  quickly restart the test at anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatchNotesModal;
