import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <Button onClick={() => dispatch(toggleTheme())} variant="ghost" size="icon">
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </Button>
  );
};

export default ThemeToggle;
