import { Link, useParams } from "react-router-dom";
// import FrontCover from "./FrontCover";
import "react-router-dom";
import { render } from "@testing-library/react";
// import './Issue.css';
import Issue from "../components/Issue";

export default function ReadPage(props) {
  const latestIssue = props.latestIssue;

  const { issueId } = useParams();

  return (
    <div>
      <Issue issueId={issueId} latestIssue={latestIssue} />
    </div>
  )
}