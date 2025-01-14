import { useParams } from "react-router-dom";

import db from "./TableOfContents";

import './Post.css';

export default function Post() {
  const { issueId, postId } = useParams();

  return (
    <div className="Post">
      <p>{db["issues"][issueId]["posts"][postId]["title"]}</p>

      <p>{db["issues"][issueId]["posts"][postId]["URL"]}</p>
    </div>
  )
}