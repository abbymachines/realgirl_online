import { render, Link } from 'react-router-dom';
import './FrontCover.css';
import db from '../TableOfContents';

// import logo from '../images/long_egg_2.png';

export default function FrontCover(props) {
  

  const issue = props.issue;
  let postIds = Object.keys(db['issues'][issue]['posts'])

  function renderCoverImage() {
    return `/images/${db['issues'][issue]['cover']}`
  }
  
  function renderPostUrl(postId) {
    return `/issue/${issue}/${postId}`
  }

  function renderPostLink(postId) {
    return <Link to={renderPostUrl(postId)}>{db['issues'][issue]['posts'][postId.toString()]['title']}</Link>
  }

  return (
    <div className='Front-cover'>
        <p className='Issue-title'>
          {issue}. {db['issues'][issue]['title']}
        </p>

        <center><img src={renderCoverImage()}className="App-logo" alt="logo" /></center>

        <ul>
          {postIds.map(postId => <li>{renderPostLink(postId)}</li>)}
        </ul>
    </div>
  );
}
