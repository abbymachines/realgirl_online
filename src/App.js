import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Home from './Home.js';
import About from './About.js';
import Issue from './Issue.js';
import Post from './Post.js';
import NoPage from './NoPage.js';
import ReactDOM from 'react-dom/client';
import Issues from './Issues.js';

function App() {
  return (
    // For more info about how to configure routes, visit
    // https://www.w3schools.com/react/react_router.asp

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="issue" element={<Issue />} />
          <Route path="issues" element={<Issues />} />
          <Route path="post" element={<Post />} />
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