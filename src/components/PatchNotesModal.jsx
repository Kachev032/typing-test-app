import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { togglePatchNotes } from "@/store/slices/modalSlice";

const PatchNotesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isPatchNotesOpen);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    dispatch(togglePatchNotes());
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-3 sm:gap-4 border bg-background p-4 sm:p-6 shadow-lg duration-200 sm:rounded-lg"
        onClick={handleModalClick}
      >
        <div className="flex flex-col space-y-1 sm:space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold">Patch Notes</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => dispatch(togglePatchNotes())}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-2">
                Version 0.0.1
              </h3>

              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  Changed state managment to Redux Toolkit for better
                  scalability
                </li>
                <li>
                  Implemented a quick restart keyboard shortcut, so users can
                  quickly restart the test at anytime
                </li>
                <li>
                  Implemented an API instead of using hardcoded data for the
                  test
                </li>
                <li>Implemented Dark Mode as the default theme</li>
                <li>
                  Implemented a pulsating underscore for better visibility and
                  trackability when typing
                </li>
                <li>
                  Implemented a "report a bug" button to easily report any
                  issues on GitHub
                </li>
                <li>
                  Implemented a fix for words that got partially carried over to
                  the next line
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
