import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const [selectedTheme, setSelectedTheme] = useState("Numbers");
    const [selectedPlayers, setSelectedPlayers] = useState(1);
    const [selectedGrid, setSelectedGrid] = useState("4x4");

    const handleThemeClick = (theme) => {
        setSelectedTheme(theme);
      };
    
      const handlePlayersClick = (player) => {
        setSelectedPlayers(player);
      };
    
      const handleGridClick = (grid) => {
        setSelectedGrid(grid);
      };
    
      const handleStartGame = () => {
        navigate("/game", {
          state: {
            theme: selectedTheme,
            players: selectedPlayers,
            grid: selectedGrid,
          },
        });
      };
    return (
        <>
            <h1>Memory</h1>
            <div className="container">
                <h2>Select Theme</h2>
                <div className="button-group">
                    <button id="items-type1" className={selectedTheme === "Numbers" ? "selected-btn" : "primary-btn"} onClick={() => handleThemeClick("Numbers")}>Numbers</button>
                    <button id="items-type2" className={selectedTheme === "Icons" ? "selected-btn" : "primary-btn"} onClick={() => handleThemeClick("Icons")}>Icons</button>
                </div>
                <h2>Number of Players</h2>
                <div className="button-group">
                    {[1, 2, 3, 4].map((player) => (
                        <button
                            key={player}
                            className={selectedPlayers === player ? "selected-btn" : "primary-btn"}
                            onClick={() => handlePlayersClick(player)}
                        >
                            {player}
                        </button>
                    ))}
                </div>
                <h2>Grid Size</h2>
                <div className="button-group">
                    {["4x4", "6x6"].map((grid) => (
                        <button
                            key={grid}
                            className={selectedGrid === grid ? "selected-btn" : "primary-btn"}
                            onClick={() => handleGridClick(grid)}
                        >
                            {grid}
                        </button>
                    ))}
                </div>
                <div className="start-container">
                    <button id="start" className="main-btn" onClick={handleStartGame}>Start Game</button>
                </div>
            </div>
        </>
    );
}

export default Home;
