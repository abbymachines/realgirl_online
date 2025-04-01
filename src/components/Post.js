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
    if (!window.tiktokEmbed) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => window.tiktokEmbed?.lib.render(); // Manually trigger render
      document.body.appendChild(script);
    } else {
      window.tiktokEmbed.lib.render(); // Re-render if script already loaded
    }
  }, [data]);

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

  return (
    <article>
      <section className="Post">
        <p className="Post-title"><Link to={`/issue/${issueId}`}>{issueId}.{postId}</Link><br />{db["issues"][issueId]["posts"][postId]["title"]}</p>
        {data ? (
          <section dangerouslySetInnerHTML={{__html: data[0].content.rendered}} />
        ) : (
          <section>Loading...</section>
        )}
      </section>
      <PostNav className="Issue-nav" issueId={issueId} latestIssueId={latestIssueId} postId={postId} />
    </article>
  );
}
