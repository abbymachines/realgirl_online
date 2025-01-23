import db from '../TableOfContents';
import Issue from "../components/Issue";

let issueKeys = Object.keys(db['issues']);
const latestIssue = issueKeys.length;

export default function Home() {
  return (
    <div>
      <Issue issueId={latestIssue} latestIssue={latestIssue} />
    </div>
  )
}