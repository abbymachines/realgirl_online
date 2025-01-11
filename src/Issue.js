import { Link, useParams } from "react-router-dom";
import FrontCover from "./FrontCover";
import "react-router-dom";
import { render } from "@testing-library/react";

export default function Issue(props) {
  const latestIssue = props.latestIssue;

  const { issueId } = useParams();
  const issueIdInt = parseInt(issueId)

  const nextIssueURL = `/issue/${issueIdInt + 1}`;
  const previousIssueURL = `/issue/${issueIdInt - 1}`;

  function renderPreviousLink() {
    if(issueIdInt <= 1) {
      return <p></p>
    } else {
      return <span>⬅⬅⬅ <Link to={previousIssueURL}>PREVIOUS ISSUE</Link> |</span>
    }
  }

  function renderNextLink() {
    if(issueIdInt < props.latestIssue) {
      return <span>| <Link to={nextIssueURL}>NEXT ISSUE</Link> ⮕⮕⮕</span>
    } else {
      return <p></p>
    }
  }

  return (
    <div>
      <FrontCover issue={issueId} />

      <center>
        {renderPreviousLink()} {renderNextLink()}
      </center>
    </div>
  )
}