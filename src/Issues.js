import db from './TableOfContents.js';

let titles = [];
let issueKeys = Object.keys(db['issues']);
let issuesLength = issueKeys.length + 1;

for (let i = 1; i < issuesLength; i++) {
  titles.push(db['issues'][i.toString()]['title']);
}

function Issues() {
  return (
    <div>
      {titles.map(title => <p>{title}</p>)}
    </div>
  )
}

export default Issues;