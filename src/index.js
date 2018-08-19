import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyDG9qqcssfIk-1Z_eg1N9_GZYYi4FrsOOU';

YTSearch({key:API_KEY, term :'RSS'}, function(data){
  console.log(data);
});

class App extends Component{
  render(){
    return(
        <div>
          <SearchBar/>
        </div>
    );
  }

}



ReactDOM.render(<App/>, document.querySelector('.container'));
