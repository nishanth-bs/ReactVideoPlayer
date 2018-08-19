import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyDG9qqcssfIk-1Z_eg1N9_GZYYi4FrsOOU';
const App = ()=>{
  return(
      <div>
        <SearchBar/>
      </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'));
