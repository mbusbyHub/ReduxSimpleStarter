import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import { YOUTUBE_API_KEY } from './api_keys';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'star wars'}, videos => {
      // this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  render() {
    return( 
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));