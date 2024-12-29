import logo from './images/long_egg_2.png';
import './App.css';
import FrontCover from './FrontCover.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">
          realgirl.online
        </p>

        <div className="Front-cover">
          <FrontCover />
        </div>
      </header>
    </div>
  );
}

export default App;
