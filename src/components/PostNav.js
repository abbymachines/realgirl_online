import { Link } from "react-router-dom";
import "react-router-dom";

import db from "../TableOfContents";

export default function PostNav(props) {
    const issueId = props.issueId;
    const latestIssueId = props.latestIssueId;
    const postId = props.postId;

    const currentIssueLatestPost = Object.keys(db["issues"][issueId]).length;

    let previousIssueLatestPost = 0;

    if (issueId > 1) {
      previousIssueLatestPost = Object.keys(db["issues"][issueId - 1]).length;
    }

    const previousPostURL = `/issue/${issueId}/${postId - 1}`;
    const previousIssuePostURL = `/issue/${issueId - 1}/${previousIssueLatestPost}`;

    const nextPostURL = `/issue/${issueId}/${parseInt(postId) + 1}`;
    const nextIssuePostURL = `/issue/${parseInt(issueId) + 1}/1`;

    function renderPreviousLink() {
      if(postId > 1) {
        return <span><Link to={previousPostURL}>PREVIOUS POST</Link></span>
      } else if(postId <= 1 && issueId > 1) {
        return <span><Link to={previousIssuePostURL}></Link></span>
      } else if(postId <= 1 && issueId <= 1) {
        return <span></span>
      }
    }

    function renderNextLink() {
      if (postId < currentIssueLatestPost) {
        return <span><Link to={nextPostURL}>NEXT POST</Link></span>
      } else if(postId >= currentIssueLatestPost && issueId < latestIssueId) {
        return <span><Link to={nextIssuePostURL}>NEXT POST</Link></span>
      } else if(postId >= currentIssueLatestPost && issueId >= latestIssueId) {
        return <span></span>
      }
    }

    return (
      <div className="Issue-nav">
        <span className="Issue-nav-previous">{renderPreviousLink()}</span> 
        <span className="Issue-nav-next">{renderNextLink()}</span>
      </div>
    )
}