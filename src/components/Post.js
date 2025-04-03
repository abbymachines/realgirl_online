import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import PostNav from "./PostNav";
import db from "../TableOfContents";
import './Post.css';

export default function Post(props) {
  const { issueId, postId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const latestIssueId = props.latestIssueId;
  const postContentRef = useRef(null);
  const tikTokScriptRef = useRef(null);

  const transformTikTokEmbeds = (html) => {
    return html.replace(
      /<figure class="wp-block-embed(.*?)tiktok(.*?)<div class="wp-block-embed__wrapper">(.*?)(https:\/\/www.tiktok.com\/@[^\/]+\/video\/\d+)(.*?)<\/div><\/figure>/gis,
      (match, p1, p2, p3, url) => {
        const videoId = url.split('/video/')[1];
        return `
          <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}">
            <section></section>
          </blockquote>
        `;
      }
    );
  };

  // Clean up ALL TikTok scripts
  const cleanTikTokScripts = () => {
    // Remove our manually added script
    if (tikTokScriptRef.current) {
      document.body.removeChild(tikTokScriptRef.current);
      tikTokScriptRef.current = null;
    }
    
    // Remove TikTok's auto-injected script
    const ttScript = document.getElementById('ttEmbedLibScript');
    if (ttScript) {
      document.body.removeChild(ttScript);
    }
    
    // Clear TikTok's global state
    if (window.tiktokEmbed) {
      delete window.tiktokEmbed;
    }
  };

  // Handle TikTok embed rendering
  useEffect(() => {
    if (!data) return;

    const renderEmbeds = () => {
      cleanTikTokScripts();
      
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          if (window.tiktokEmbed) {
            window.tiktokEmbed.lib.render();
          }
        }, 100);
      };
      
      document.body.appendChild(script);
      tikTokScriptRef.current = script;
    };

    renderEmbeds();

    return cleanTikTokScripts;
  }, [data]);

  // Fetch post data
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${db["issues"][issueId]["posts"][postId]["URL"]}`);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        if (responseData[0]?.content?.rendered) {
          responseData[0].content.rendered = transformTikTokEmbeds(responseData[0].content.rendered);
        }
        setData(responseData);
      } else {
        setError('Failed to fetch data');
      }
    };

    xhr.onerror = function() {
      setError('Network error occurred');
    };

    xhr.send();

    return () => {
      xhr.abort();
      cleanTikTokScripts();
    };
  }, [issueId, postId]);

  return (
    <article>
      <section className="Post">
      <p className="Post-title">
          <Link to={`/issue/${issueId}`}>{issueId}.{postId}</Link><br />
          {db["issues"][issueId]["posts"][postId]["title"]}
        </p>
        {error ? (
          <div>Error: {error}</div>
        ) : data ? (
          // Use ref for the content container
          <section 
            ref={postContentRef}
            dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} 
          />
        ) : (
          <section>Loading...</section>
        )}
      </section>
      <PostNav className="Issue-nav" issueId={issueId} latestIssueId={latestIssueId} postId={postId} />
    </article>
  );
}