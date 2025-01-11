import { useParams } from "react-router-dom";

import db from "./TableOfContents";

export default function Post() {
  const { issueId, postId } = useParams();

  return (
    <div>
      <p>{db["issues"][issueId]["posts"][postId]["title"]}</p>

      <p>{db["issues"][issueId]["posts"][postId]["URL"]}</p>
    </div>
  )
}