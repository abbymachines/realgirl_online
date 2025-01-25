import { useParams } from "react-router-dom";
// import FrontCover from "./FrontCover";
import "react-router-dom";
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