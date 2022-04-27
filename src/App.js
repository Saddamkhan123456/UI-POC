import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="pt-6 space-y-4 bg-red-700">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p className="">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
