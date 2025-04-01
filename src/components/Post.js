import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'; // Added useRef
import PostNav from "./PostNav";
import db from "../TableOfContents";
import './Post.css';

export default function Post(props) {
  const { issueId, postId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const latestIssueId = props.latestIssueId;
  const postContentRef = useRef(null); // Ref for the content container

  // Transform WordPress TikTok embeds to TikTok's blockquote format
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

  // Load TikTok script and render embeds
  useEffect(() => {
    if (!data) return;

    const renderTikTokEmbeds = () => {
      if (window.tiktokEmbed) {
        try {
          window.tiktokEmbed.lib.render();
        } catch (e) {
          console.error("TikTok render failed:", e);
        }
      }
    };

    if (!window.tiktokEmbed) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = renderTikTokEmbeds;
      document.body.appendChild(script);
    } else {
      renderTikTokEmbeds();
    }

    return () => {
      // Clean up script if needed
      const script = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (script) document.body.removeChild(script);
    };
  }, [data]);

  // Fetch post data
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${db["issues"][issueId]["posts"][postId]["URL"]}`);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        // Transform embeds before setting data
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

    return () => xhr.abort();
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