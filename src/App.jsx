import TypingTest from "./components/TypingTest";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ShortcutHint from "./components/ShortcutHint";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="py-2 sm:py-4 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">ReciteThis</div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <TypingTest />
      </main>
      <ShortcutHint />
      <Footer />
    </div>
  );
}

export default App;
