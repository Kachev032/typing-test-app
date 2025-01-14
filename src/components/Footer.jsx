import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-12 bg-background border-t border-border">
      <div className="max-w-screen-xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="hover:text-foreground cursor-pointer">
              patch notes (v0.0.1)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Kachev032/typing-test-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:your@email.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
