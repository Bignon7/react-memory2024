import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Game() {
    useEffect(() => {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#152938'; 
    
        return () => {
          document.body.style.backgroundColor = ''; 
          document.body.style.color = ''; 
        };
      }, []);

  const { state } = useLocation();
  const { theme, players, grid } = state;

  return (
    <div>
      <h1>Le jeu a commencé</h1>
      <p>Theme: {theme}</p>
      <p>Number of Players: {players}</p>
      <p>Grid Size: {grid}</p>
    </div>
  );
}

export default Game;
