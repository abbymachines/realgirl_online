import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PostNav from "./PostNav";
import db from "../TableOfContents";
import './Post.css';

export default function Post(props) {
  const { issueId, postId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const latestIssueId = props.latestIssueId;

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `${db["issues"][issueId]["posts"][postId]["URL"]}`);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      } else {
        setError('Failed to fetch data');
      }
    };

    xhr.onerror = function() {
      setError('Network error occurred');
    };

    xhr.send();

    // Cleanup function
    return () => {
      xhr.abort(); // Abort the request if component unmounts
    };
  }, [issueId, postId]); // Dependencies array with relevant values

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="Post">
        <p><Link to={`/issue/${issueId}`}>{issueId}</Link>.{postId}<br />{db["issues"][issueId]["posts"][postId]["title"]}</p>
        {data ? (
          <div dangerouslySetInnerHTML={{__html: data[0].content.rendered}} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <PostNav className="Issue-nav" issueId={issueId} latestIssueId={latestIssueId} postId={postId} />
    </div>
  );
}
