import FrontCover from "./FrontCover";
import logo from './images/long_egg_2.png';
import db from './TableOfContents';

// let titles = [];
let issueKeys = Object.keys(db['issues']);
const latestIssue = issueKeys.length;

export default function Home() {
  return (
    <header className="App-header">
      <p className="Title">
        realgirl.online
      </p>

      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <FrontCover issue={latestIssue} />
      </div>


    </header>
  )
}