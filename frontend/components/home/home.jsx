import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <home className="home-page">
      <h1 className="show-page-title">Home</h1>
      <br />
      <h3 className="main-page">Recommended</h3>
      <tiles>
          <Link to="/podcasts/Fresh%20Air"><img className="tile" src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/6c/b6/ab/6cb6ab65-91d0-5a25-5199-9bae5bf2e89b/source/600x600bb.jpg" /><div className="rec-text">Fresh Air</div></Link>
          <Link to="/podcasts/TED%20Radio%20Hour"><img className="tile" src="https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/21/3a/3e/213a3e55-3264-653c-7fda-b8ef4dc39bbf/source/600x600bb.jpg" /><div className="rec-text">TED Radio Hour</div></Link>
          <Link to="/podcasts/Reply%20All"><img className="tile" src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/22/0d/f6/220df688-843f-264a-b67e-28644b73c129/source/600x600bb.jpg" /><div className="rec-text">Reply All</div></Link>
          <Link to="podcasts/The%20New%20Yorker%20Radio%20Hour"><img className="tile" src="https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/f4/6e/ac/f46eac31-45ad-7349-34b2-6f4366d45ed2/source/600x600bb.jpg" /><div className="rec-text">New Yorker Radio Hour</div></Link>
      </tiles>
    </home>
  )
}

export default Home;
