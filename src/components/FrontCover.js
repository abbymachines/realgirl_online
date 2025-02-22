import { Link } from 'react-router-dom';
import './FrontCover.css';
import db from '../TableOfContents';

export default function FrontCover(props) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const issue = props.issue;
  let postIds = Object.keys(db['issues'][issue]['posts'])

  function renderCoverImage() {
    return `/images/${db['issues'][issue]['cover']}`
  }
  
  function renderPostUrl(postId) {
    return `/issue/${issue}/${postId}`
  }

  function renderPostLink(postId) {
    return (
          <Link to={renderPostUrl(postId)}>
            <button type="button" className="Post-button">
            <span>
            {postId}
            </span>. {db['issues'][issue]['posts'][postId.toString()]['title']}
            </button>
          </Link>
          )
  }

  return (
    <div className='Front-cover'>
        <p className='Issue-title'>
          {issue}. {db['issues'][issue]['title']}
        </p>

        <p className='Issue-date'>{db['issues'][issue]['year']} {months[db['issues'][issue]['month'] - 1]}</p>

        <center><img src={renderCoverImage()}className="App-logo" alt="logo" /></center>

        <ul>
          {postIds.map(postId => <li>{renderPostLink(postId)}</li>)}
        </ul>
    </div>
  );
}
