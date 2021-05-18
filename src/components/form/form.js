import React from 'react';
import './form.scss';
// import './main.scss';
import axios from 'axios'


class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiMethod: [],
      methodValue: 'get',
      classValue: 'getButton',
      input: '',
      requestInput: '',
      apiUrl: ['https://pokeapi.co/api/v2/pokemon/'],
      methodClass: [],
      formGet: 'getButton',
      formPost: 'plain',
      formPut: 'plain',
      formDelete: 'plain',
     
    }
  }
  addUrlAndMethod = () => {
    this.setState({
      apiUrl: [this.state.input, ...this.state.apiUrl],
      apiMethod: [this.state.methodValue, ...this.state.apiMethod],
      methodClass: [this.state.classValue, ...this.state.methodClass],
    });


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
  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(this.state.apiUrl[0]);

    let data = response.body;
    let headerData = response.header;

    this.props.updateResults(data, headerData);
    this.setState({ input: '' });

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