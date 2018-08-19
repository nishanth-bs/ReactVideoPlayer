import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyDG9qqcssfIk-1Z_eg1N9_GZYYi4FrsOOU';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { videos :[],
                    selectedVideo : null};
    this.videoSearch('RSS');

  }
  videoSearch(term){
      YTSearch({key:API_KEY, term :term}, (videos)=>{
        this.setState({videos});
        //this.setState({videos: videos});
        this.setState({selectedVideo:this.state.videos[0]});
        console.log(this.state.videos);
      });
  }
  render(){
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) },300);
    return(
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
    );
  }

}



ReactDOM.render(<App/>, document.querySelector('.container'));
