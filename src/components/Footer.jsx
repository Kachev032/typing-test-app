import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Github, Mail, Bug } from "lucide-react";
import { togglePatchNotes } from "@/store/slices/modalSlice";
import PatchNotesModal from "./PatchNotesModal";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <>
      <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto w-full px-4 h-12 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a
                href="https://github.com/Kachev032/typing-test-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a
                href="https://github.com/Kachev032/typing-test-app/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Bug className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a
                href="mailto:your@email.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <button
            onClick={() => dispatch(togglePatchNotes())}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            patch notes (v0.0.1)
          </button>
        </div>
      </footer>
      <PatchNotesModal />
    </>
  );
};

export default Footer;
