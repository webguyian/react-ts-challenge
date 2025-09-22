import './App.css';
import { MemoryGame } from './components/MemoryGame';

const App = () => {
  return (
    <div className="app">
      <h1>Memory Game Challenge 🧠</h1>
      <div className="instructions">
        <details open>
          <summary className="instructions-heading">Instructions</summary>
          <p>
            Complete the game logic by implementing the{' '}
            <code>handleCardClick</code> function in <code>MemoryGame.tsx</code>
            . The game should:
          </p>
          <ul>
            <li>Allow flipping a maximum of 2 cards at a time</li>
            <li>Check if flipped cards match</li>
            <li>
              Track the number of moves (a move is when 2 cards are flipped)
            </li>
            <li>Detect when all cards are matched to end the game</li>
          </ul>
        </details>
      </div>
      <MemoryGame />
    </div>
  );
};

export default App;
