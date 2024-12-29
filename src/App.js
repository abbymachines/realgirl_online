import logo from './images/long_egg_2.png';
import './App.css';
import FrontPage from './FrontPage.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          realgirl.online
        </p>
      </header>
      <div>
        <FrontPage className="Cover-box"/>
      </div>
    </div>
  );
}

export default App;
