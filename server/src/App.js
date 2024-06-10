import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DiceGame from "./components/DiceGame";
// import Game from "./components/Game";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div className="w-full h-screen bg-gray-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/home" element={<DiceGame />} />
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
