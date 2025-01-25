import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function PostNav({ issueId, latestIssueId, postId, lastPostInPreviousIssue }) {
  // Memoize URLs to prevent unnecessary recalculations
  const urls = useMemo(() => ({
    previousPostURL: `/issue/${issueId}/${postId - 1}`,
    previousIssuePostURL: `/issue/${issueId - 1}/${lastPostInPreviousIssue}`,
  }), [issueId, postId, lastPostInPreviousIssue]);

  // Memoize the previous link element
  const previousLink = useMemo(() => {
    if (postId > 1) {
      return (
        <Link to={urls.previousPostURL}>PREVIOUS POST</Link>
      );
    } else if (postId <= 1 && issueId > 1) {
      return (
        <Link to={urls.previousIssuePostURL}>PREVIOUS POST</Link>
      );
    }
    return null;
  }, [postId, issueId, urls]);

  return (
    <div className="Issue-nav">
      <span className="Issue-nav-previous">
        {previousLink}
      </span>
    </div>
  );
}
