import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import './App.css';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul class="Nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/issues">Archive</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <header className="App-header">
        <p className="Title">
          <Link to="/" className="Homepage-link">realgirl.online</Link>
        </p>
      </header>

      <div className="Grey-background">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;