import { Link } from "react-router-dom";
import "react-router-dom";

export default function IssueNav(props) {
    const issueId = props.issueId;
    const latestIssueId = props.latestIssueId;

    const nextIssueURL = `/issue/${issueId + 1}`;
    const previousIssueURL = `/issue/${issueId - 1}`;

    function renderPreviousLink() {
        if(issueId <= 1) {
          return <span></span>
        } else {
          return <span><Link to={previousIssueURL}>⬅⬅⬅ PREVIOUS ISSUE</Link></span>
        }
      }
    
      function renderNextLink() {
        if(issueId < latestIssueId) {
          return <span><Link to={nextIssueURL}>NEXT ISSUE ⮕⮕⮕</Link></span>
        } else {
          return <span></span>
        }
      }

    return (
      <div className="Issue-nav">
        {renderPreviousLink()} {renderNextLink()}
      </div>
    )
}