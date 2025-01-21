import { render, Link } from 'react-router-dom';
import './FrontCover.css';
import db from '../TableOfContents';

import logo from '../images/long_egg_2.png';

export default function FrontCover(props) {
  const issue = props.issue;
  let postIds = Object.keys(db['issues'][issue]['posts'])

  function renderPostUrl(postId) {
    return `/issue/${issue}/${postId}`
  }

  function renderPostLink(postId) {
    return <Link to={renderPostUrl(postId)}>{db['issues'][issue]['posts'][postId.toString()]['title']}</Link>
  }

  return (
    <div className='Front-cover'>
        <center><img src={logo} className="App-logo" alt="logo" /></center>
        
        <p className='Issue-title'>
          {issue}. {db['issues'][issue]['title']}
        </p>

        <ul>
          {postIds.map(postId => <li>{renderPostLink(postId)}</li>)}
        </ul>
    </div>
  );
}

// export default FrontPage;
