import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyDG9qqcssfIk-1Z_eg1N9_GZYYi4FrsOOU';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { videos :[]};

    YTSearch({key:API_KEY, term :'RSS'}, (videos)=>{
      this.setState({videos});
      //this.setState({videos: videos});
      console.log(this.state.videos);
    });
  }
  render(){
    return(
        <div>
          <SearchBar/>
          <VideoList videos = {this.state.videos}/>
        </div>
    );
  }

}



ReactDOM.render(<App/>, document.querySelector('.container'));
