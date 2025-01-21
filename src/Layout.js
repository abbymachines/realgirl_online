import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import db from "./TableOfContents";
import './App.css';

const Layout = () => {
  let issueKeys = Object.keys(db['issues']);
  const latestIssue = issueKeys.length;
  const latestIssueURL = `/issue/${latestIssue}`

  return (
    <div>
      <nav>
        <ul class="Nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={latestIssueURL}>Read</Link>
          </li>
          <li>
            <Link to="/issues">Archive</Link>
          </li>
        </ul>
      </nav>

      <header className="App-header">
        <p className="Title">
          realgirl.online
        </p>
      </header>

      <div className="Grey-background">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;