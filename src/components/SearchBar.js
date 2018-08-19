import  React, {Component} from 'react';

class SearchBar extends Component{
  render(){
    return(
      <div>
        <input onChange= {event => console.log(event.target.value)}/>
        <input onChange = {this.onIpChange} />
      </div>
    );
  }
  onIpChange(event){
    console.log(event.target.value);
  }

}

export default SearchBar;
