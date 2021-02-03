import './App.css';
import Deck from './components/Deck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Appian code exercise
        </p>
        <Deck />
        <a
          className="App-link"
          href="https://jesseolsen.github.io/appian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted site
        </a>
        <a
          className="App-link"
          href="https://github.com/jesseolsen/appian"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub source repository
        </a>
        <a
          className="App-link"
          href="https://code.google.com/archive/p/vector-playing-cards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Attribution for the public domain playing card images
        </a>
      </header>
    </div>
  );
}

export default App;
