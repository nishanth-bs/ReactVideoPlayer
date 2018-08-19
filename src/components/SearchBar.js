import  React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:'yo'};
  }
  render(){
    return(
      <div>

        {/*es6 approach of defining the function inline
        controlled element */}
        <input
          value = {this.state.term}
          onChange= {event => this.setState({term:event.target.value})}/>
        { /* using function */ }
        <input onChange = {this.onIpChange} />
        {this.state.term}
      </div>
    );
  }
  onIpChange(event){
    console.log(event.target.value);
  }

}

export default SearchBar;
