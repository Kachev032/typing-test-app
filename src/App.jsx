import TypingTest from "./components/TypingTest";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ShortcutHint from "./components/ShortcutHint";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex justify-between items-center p-4">
        <div className="text-3xl font-bold">Typing Test</div>
        <ThemeToggle />
      </div>
      <TypingTest />
      <ShortcutHint />
      <Footer />
    </div>
  );
}

export default App;
