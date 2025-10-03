import "./App.css";
// import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.js";
import Home from "./pages/HomePage.js";
import Post from "./components/Post.js";
import NoPage from "./NoPage.js";
import ReactDOM from "react-dom/client";
import ReadPage from "./pages/IssuePage.js";
import ArchivePage from "./pages/ArchivePage.js";
import AboutPage from "./pages/AboutPage.js";
import Realgirl1994Page from "./pages/realgirl1994Page.js";
import ScrollToTop from "./components/ScrollToTop.js";

import db from "./TableOfContents.js";

function App() {
  let issueKeys = Object.keys(db["issues"]);
  const latestIssue = issueKeys.length;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/issue/:issueId"
            element={<ReadPage latestIssue={latestIssue} />}
          />
          <Route
            path="/archive"
            element={<ArchivePage latestIssue={latestIssue} />}
          />
          <Route
            path="/issue/:issueId/:postId"
            element={<Post latestIssueId={latestIssue} />}
          />
          <Route path="/realgirl1994" element={<Realgirl1994Page />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
