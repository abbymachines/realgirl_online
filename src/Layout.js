import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import db from "./TableOfContents";

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

      <Outlet />
    </div>
  )
};

export default Layout;