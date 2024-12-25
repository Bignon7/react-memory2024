import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import SettingsRow from '../components/SettingsRow';

function Home() {
  const navigate = useNavigate();

  const startGame = () => {
    const gameData = {
      theme: selections.theme,
      players: selections.players,
      grid: selections.grid,
    };

    navigate('/game', { state: gameData });
  };

  const [selections, setSelections] = useState({
    theme: 'Numbers',
    players: '1',
    grid: '4x4',
  });

  const handleSelectionChange = (key, value) => {
    setSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="page">
      <h1 className="gameName">memory</h1>
      <div className="card">
        <SettingsRow
          title="Select Theme"
          options={['Numbers', 'Icons']}
          selected={selections.theme}
          onChange={(value) => handleSelectionChange('theme', value)}
        />
        <SettingsRow
          title="Number of Players"
          options={['1', '2', '3', '4']}
          selected={selections.players}
          onChange={(value) => handleSelectionChange('players', value)}
        />
        <SettingsRow
          title="Grid size"
          options={['4x4', '6x6']}
          selected={selections.grid}
          onChange={(value) => handleSelectionChange('grid', value)}
        />
        <div className="start" onClick={startGame}>
          Start Game
        </div>
      </div>
    </div>
  );
}

export default Home;
