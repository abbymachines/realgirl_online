import './FrontCover.css';

export default function FrontCover() {

  return (
    <div className='Front-cover'>
        <p className='Issue-title'>
          this is the front cover
        </p>

        <ul>
          <li>This would be the first article.</li>

          <li>This would be the second article.</li>

          <li>This would be the third article.</li>

          <li>Ideally, there would be a: CSS styling for these items (and pretty minimal styling at that), as well as some code that renders this list out of a provided array of list items. These items would appear here as links and then be routed out to separate pages. The pages themselves would have buttons to allow you to click through stories and issues.</li>
        </ul>
    </div>
  );
}

// export default FrontPage;
