import { render } from '@testing-library/react';
import db from '../TableOfContents.js';
import { Link } from 'react-router-dom';
import './ArchivePage.css';

let issueNames = [];
let issuesLength = Object.keys(db['issues']).length + 1;

for (let i = 1; i < issuesLength; i++) {
  issueNames.push(db['issues'][i.toString()]['title'])
}

function renderCoverImage(index) {
  return `/images/${db['issues'][index]['cover']}`
}

function ArchivePage() {
  return (
    <div className="Front-cover">
      {issueNames.toReversed().map(
        (title, index) =>
          <p>
            {console.log(db['issues'][(issuesLength - index) - 1]['cover'])}
            
            <center>
              <Link to={`/issue/${issuesLength - (index + 1)}`}>{issuesLength - (index + 1)}. {title} <br></br> <img className='Archive-item-image' src={renderCoverImage(issuesLength - (index + 1))}></img></Link>
            </center>
          </p>)}
    </div>
  )
}

export default ArchivePage;