import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Home from './pages/HomePage.js';
import About from './About.js';
import Issue from './components/Issue.js';
import Post from './components/Post.js';
import NoPage from './NoPage.js';
import ReactDOM from 'react-dom/client';
import Issues from './components/Issues.js';
import ReadPage from './pages/IssuePage.js';

import db from './TableOfContents.js';

function App() {
  let issueKeys = Object.keys(db['issues']);
  const latestIssue = issueKeys.length;

  return (
    // For more info about how to configure routes, visit
    // https://www.w3schools.com/react/react_router.asp

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="issue/:issueId" element={<ReadPage latestIssue={latestIssue} />} />
          <Route path="issues" element={<Issues latestIssue={latestIssue} />} />
          <Route path="/issue/:issueId/:postId" element={<Post latestIssueId={latestIssue} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

// const routes = [
//   {
//     path: "/about",
//     component: <AboutPage />,
//   },
//   {
//     path: "/issue/:issueId",
//     component: <Issue />
//   },
//   {
//     path: "/issue/:issueId/post/:postId",
//     component: <Post />
//   },
// ];

// const { issueId, postId } = urlParams;
// function getPost() {
//   // const uri = db[issueId][postId];
//   // const data = makeGetRequest(uri);
//   const uri = db[]
//   return data;
// }