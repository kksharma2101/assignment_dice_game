import "./App.css";
import DiceGame from "./components/DiceGame";
import Game from "./components/Game";

function App() {
  return (
    <div className="w-full h-screen bg-gray-400">
      {/* <h1 className="font-extrabold text-white bg-gray-800 p-4">
        7 Up 7 Down Game
      </h1> */}
      <DiceGame />
      {/* <Game /> */}
    </div>
  );
}

export default App;
