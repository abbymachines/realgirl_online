import { useParams } from "react-router-dom";
import { useState } from 'react';

import PostNav from "./PostNav";

import db from "../TableOfContents";

import './Post.css';

export default function Post(props) {
  const { issueId, postId } = useParams();
  const [data, setData] = useState(null);
  const latestIssueId = props.latestIssueId;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${db["issues"][issueId]["posts"][postId]["URL"]}`);
  xhr.onload = function() {
    if (xhr.status === 200) {
      setData(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();


  return (
    <div>
      <div className="Post">
        <p>{issueId}.{postId}<br />{db["issues"][issueId]["posts"][postId]["title"]}</p>

        {data ? <div dangerouslySetInnerHTML={{__html: data[0].content.rendered}} /> : <div>Loading...</div>}
      </div>
      <PostNav issueId={issueId} latestIssueId={latestIssueId} postId={postId} />
    </div>
  )
}