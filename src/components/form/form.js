import React from 'react';
import './form.scss';
// import './main.scss';


class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      rest: '',
    }
  }


  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleRestChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      rest: e.target.value
    })
  }

    render(){
      return(
        <div className = "App-Form">
          <form className = "App-Url">
            <label>URL:</label>
            <input onChange = {this.handleInputChange} type = "text" value = {this.state.input}/>
            <button>Submit</button>
          </form>
          <form className = "App-Rest">
            <button onClick = {this.handleRestChange} value = "GET">GET</button>
            <button onClick = {this.handleRestChange} value = "POST">POST</button>
            <button onClick = {this.handleRestChange} value = "PUT">PUT</button>
            <button onClick = {this.handleRestChange} value = "DELETE">DELETE</button>
          </form>
          <dev className ="App-main">
            <p>Entry List Here : {this.state.rest} {this.state.input}</p>
          </dev>
        </div>
      )
    }
};
export default Form;