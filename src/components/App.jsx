import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0]
    };
  }
  //STOPPING HERE
  //can we set currentVideo default to one of the example videos and see if that works temporarily
  //start from here on Saturday to try and get initial currentVideo to not error?
  componentDidMount() {
    this.getVideos('react');
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  getVideos(query) {
    var options = {
      query: query,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    var callback = (results) => {
      this.setState({
        videos: results,
        currentVideo: results[0]
      });
    };
    searchYouTube(options, callback);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div onClick={this.dummy}><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} getClickedVideo={this.changeCurrentVideo.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
