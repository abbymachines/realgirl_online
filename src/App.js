import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Home from './pages/HomePage.js';
import About from './About.js';
import Post from './components/Post.js';
import NoPage from './NoPage.js';
import ReactDOM from 'react-dom/client';
// import Issues from './components/Issues.js';
import ReadPage from './pages/IssuePage.js';
import ArchivePage from './pages/ArchivePage.js';

import db from './TableOfContents.js';

function App() {
  let issueKeys = Object.keys(db['issues']);
  const latestIssue = issueKeys.length;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="issue/:issueId" element={<ReadPage latestIssue={latestIssue} />} />
          <Route path="archive" element={<ArchivePage latestIssue={latestIssue} />} />
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