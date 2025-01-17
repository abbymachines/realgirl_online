import { useParams } from "react-router-dom";
import { useState } from 'react';

import db from "./TableOfContents";

import './Post.css';

export default function Post() {
  const { issueId, postId } = useParams();
  const [data, setData] = useState(null);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${db["issues"][issueId]["posts"][postId]["URL"]}`);
  xhr.onload = function() {
    if (xhr.status === 200) {
      setData(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();


  return (
    <div className="Post">
      <p>{db["issues"][issueId]["posts"][postId]["title"]}</p>

      <p>{db["issues"][issueId]["posts"][postId]["URL"]}</p>

      {data ? <div>{JSON.stringify(data[0].content.rendered)}</div> : <div>Loading...</div>}
    </div>
  )
}