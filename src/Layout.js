import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import db from "./TableOfContents";

const Layout = () => {
  let issueKeys = Object.keys(db['issues']);
  const latestIssue = issueKeys.length;
  const latestIssueURL = `/issue/${latestIssue}`

  return (
    <>
      <nav>
        <ul class="Nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={latestIssueURL}>Issue</Link>
          </li>
          <li>
            <Link to="/issues">Issues</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;