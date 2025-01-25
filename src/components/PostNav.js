import { Link } from "react-router-dom";
import "react-router-dom";

import { debounce } from 'lodash';

export default function PostNav(props) {
    const issueId = props.issueId;
    const latestIssueId = props.latestIssueId;
    const postId = props.postId;

    const nextIssueURL = `/issue/${issueId + 1}`;
    const previousIssueURL = `/issue/${issueId - 1}`;
    const previousPostURL = `/issue/${issueId}/${postId - 1}`
    const previousIssuePostURL = `/issue/${issueId}/${"somehow put in the last post of the previous issue"}`

    function renderPreviousLink() {
      if(postId > 1) {
        console.log('GOING TO PREVIOUS POST OF SAME ISSUE')
        return <span><Link to={previousPostURL}>PREVIOUS POST</Link></span>
      } else if(postId <= 1 && issueId > 1) {
        return <span><Link to={previousIssuePostURL}></Link></span>
      } else if(postId <= 1 && issueId <= 1) {
        return <span></span>
      }
    }

    return (
      <div className="Issue-nav">
        <span className="Issue-nav-previous">{renderPreviousLink()}</span> 
        {/* <span className="Issue-nav-next">{renderNextLink()}</span> */}
        {/* <div className="clear"></div> */}
      </div>
    )
}