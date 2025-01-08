import './FrontCover.css';
import db from './TableOfContents';

export default function FrontCover(props) {
  const issue = props.issue;
  let postTitles = []
  let postKeys = Object.keys(db['issues'][issue]['posts'])
  let postsLength = postKeys.length + 1;

  for (let i = 1; i < postsLength; i++) {
    postTitles.push(db['issues'][issue]['posts'][i.toString()]['title'])
  }

  return (
    <div className='Front-cover'>
        <p className='Issue-title'>
          {issue}. {db['issues'][issue]['title']}
        </p>

        <ul>
          {postTitles.map(postTitle => <li>{postTitle}</li>)}
        </ul>
    </div>
  );
}

// export default FrontPage;
