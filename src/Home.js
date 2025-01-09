import { useState } from 'react';

import FrontCover from "./FrontCover";
import logo from './images/long_egg_2.png';
import db from './TableOfContents';

// let titles = [];
let issueKeys = Object.keys(db['issues']);
const latestIssue = issueKeys.length;

export default function Home() {
  const [currentIssue, setCurrentIssue] = useState(latestIssue);

  const decrementIssue = () => {
    if (currentIssue > 1) {
      setCurrentIssue(currentIssue - 1);
    }
  }

  const incrementIssue = () => {
    if (currentIssue < latestIssue) {
      setCurrentIssue(currentIssue + 1);
    }
  }

  return (
    <header className="App-header">
      <p className="Title">
        realgirl.online
      </p>

      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <FrontCover issue={currentIssue} />
      </div>

      <button onClick={decrementIssue}>back</button>
      <button onClick={incrementIssue}>next</button>

    </header>
  )
}