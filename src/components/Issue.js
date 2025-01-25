import FrontCover from "./FrontCover";
import "react-router-dom";
import './Issue.css';
import IssueNav from './IssueNav.js';
import db from "../TableOfContents.js";

export default function Issue(props) {
  const issueId = props.issueId;
  const latestIssue = props.latestIssue;

  const issueIdInt = parseInt(issueId)
  const latestIssueInt = parseInt(latestIssue);

  return (
    <div>
      <FrontCover issue={issueId} />

      <IssueNav className="Issue-nav" issueId={issueIdInt} latestIssueId={latestIssueInt} />
    </div>
  )
}