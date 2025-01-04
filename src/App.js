import logo from './images/long_egg_2.png';
import './App.css';
import FrontCover from './FrontCover.js'

import db from './TableOfContents.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout.js';
import Home from './Home.js';
import About from './About.js';

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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p className="Title">
    //       realgirl.online
    //     </p>

    //     <img src={logo} className="App-logo" alt="logo" />

    //     <div className="Front-cover">
    //       <FrontCover />
    //     </div>

        
    //   </header>
    // </div>

    // For more info about how to configure routes, visit
    // https://www.w3schools.com/react/react_router.asp

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="issue" element={<Issue />} />
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
