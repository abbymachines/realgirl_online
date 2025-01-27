import { render } from '@testing-library/react';
import db from '../TableOfContents.js';
import { Link } from 'react-router-dom';

// let issues = {};
// issueNames = 
// let issueKeys = Object.keys(db['issues']);
// let issuesLength = issueKeys.length + 1;

// for (let i = 1; i < issuesLength; i++) {
//   let issueName = db['issues'][i.toString()]['title'];
//   let issueURL = `/issue/${i}`
//   issues.push(issueName);
//   issues[issueName] = issueURL
// }

let issueNames = [];
let issuesLength = Object.keys(db['issues']).length + 1;

for (let i = 1; i < issuesLength; i++) {
  issueNames.push(db['issues'][i.toString()]['title'])
}

function renderCoverImage(index) {
  return `/images/${db['issues'][index + 1]['cover']}`
}

function ArchivePage() {
  return (
    <div className="Front-cover">
      {issueNames.map(
        (title, index) =>
          <p>
            {console.log(db['issues'][index + 1]['cover'])}
            
            <Link to={`/issue/${index + 1}`}>{index + 1}. {title} <img src={renderCoverImage(index)}></img></Link>
          </p>)}
    </div>
  )
}

export default ArchivePage;