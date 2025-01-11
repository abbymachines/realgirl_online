import { useParams } from "react-router-dom";
import FrontCover from "./FrontCover";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-router-dom";

export default function Issue() {
  const { issueId } = useParams();

  return (
    <div>
      <FrontCover issue={issueId} />
    </div>
  )
}