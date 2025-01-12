import TypingTest from "./components/TypingTest";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Typing Test</div>
        <ThemeToggle />
      </div>
      <TypingTest />
    </div>
  );
}

export default App;
