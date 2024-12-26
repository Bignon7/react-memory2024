import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Game from './components/Game'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game className="white_background"/>} />
      </Routes>
    </Router>
  );
}

export default App;
