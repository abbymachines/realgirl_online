import { Link, useParams } from "react-router-dom";
import FrontCover from "./FrontCover";
import "react-router-dom";
import { render } from "@testing-library/react";
import './Issue.css';

export default function Issue(props) {
  const latestIssue = props.latestIssue;

  const { issueId } = useParams();
  const issueIdInt = parseInt(issueId)

  const nextIssueURL = `/issue/${issueIdInt + 1}`;
  const previousIssueURL = `/issue/${issueIdInt - 1}`;

  function renderPreviousLink() {
    if(issueIdInt <= 1) {
      return <span></span>
    } else {
      return <span><Link to={previousIssueURL}>⬅⬅⬅ PREVIOUS ISSUE</Link></span>
    }
  }

  function renderNextLink() {
    if(issueIdInt < latestIssue) {
      return <span><Link to={nextIssueURL}>NEXT ISSUE ⮕⮕⮕</Link></span>
    } else {
      return <span></span>
    }
  }

  return (
    <div>
      <FrontCover issue={issueId} />

      <center className="Issue-nav">
        {renderPreviousLink()} {renderNextLink()}
      </center>
    </div>
  )
}