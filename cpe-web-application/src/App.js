import Firstpage from './1st_Components/Home/FirstPage';
import './App.css';
import MainPer from './1st_Components/PersonelPage/mainPer';
import PerProfile from './1st_Components/PersonelPage/PerProfile/PerProfile.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
