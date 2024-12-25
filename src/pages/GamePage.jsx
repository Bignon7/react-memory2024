import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GamePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Récupérer les données passées via state
  const gameData = location.state;

  // Gérer le cas où les données sont absentes
  if (!gameData) {
    toast.warning("Configurez une nouvelle partie");
    setTimeout(() => {
      navigate('/');
    }, 1);
    return null;
  }

  return (
    <div className="page">
      <h1>Game Started</h1>
      <p>Theme: {gameData.theme}</p>
      <p>Players: {gameData.players}</p>
      <p>Grid: {gameData.grid}</p>
    </div>
  );
}

export default GamePage;
