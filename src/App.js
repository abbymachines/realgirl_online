import logo from './images/long_egg_2.png';
import './App.css';
import FrontCover from './FrontCover.js'

import db from './TableOfContents.js';

const routes = [
  {
    path: "/about",
    component: <AboutPage />,
  },
  {
    path: "/issue/:issueId",
    component: <RealGirlIssue />
  },
  {
    path: "/issue/:issueId/post/:postId",
    component: <RealGirlPost />
  },
];

const { issueId, postId } = urlParams;
function getPost() {
  // const uri = db[issueId][postId];
  // const data = makeGetRequest(uri);
  const uri = db[]
  return data;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">
          realgirl.online
        </p>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="Front-cover">
          <FrontCover />
        </div>

        
      </header>
    </div>
  );
}

export default App;
