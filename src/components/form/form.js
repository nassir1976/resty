

 import React from 'react';
import './form.scss';
import './form.scss';
import superagent from 'superagent';
// import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
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
//add url & method 
  addUrlAndMethod = () => {
    this.setState({
      apiUrl: [this.state.input, ...this.state.apiUrl],
      apiMethod: [this.state.methodValue, ...this.state.apiMethod],
      methodClass: [this.state.classValue, ...this.state.methodClass],
    });


  }

  handleMethodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
  }

  methodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
    this.setState({ classValue: `${e.target.value}Button` });
    if(e.target.value === 'get') {
      this.setState({
        formGet: 'getButton',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'post') {
      this.setState({
        formGet: 'plain',
        formPost: 'postButton',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'put') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'putButton',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'delete') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'deleteButton',
      });
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleRequestChange = (e) => {
    this.setState({ requestInput: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await superagent.get(this.state.apiUrl[0]);

    let data = response.body;
    let headerData = response.header;

    this.props.updateResults(data, headerData);
    this.setState({ input: '' });

  }


  render() {
    return (
      <div>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>Enter REST API URL Here: <br />
            <input className="urlEntry" onChange={this.handleChange} type='text' value ={this.state.input} />
          </label>
          <br/>
          <label className="ChoiceofMethod">Choice of Method: <br />
            <button className={this.state.formGet} value="get" onClick={this.methodChange}>GET</button>
            <button className={this.state.formPost} value="post" onClick={this.methodChange}>POST</button>
            <button className={this.state.formPut} value="put" onClick={this.methodChange}>PUT</button>
            <button className={this.state.formDelete} value="delete" onClick={this.methodChange}>DELETE</button>
            <label>Request Body: <br />
              <textarea className="textarea" value={this.state.requestInput} onChange={this.handleRequestChange} />
            </label>
            <input className="submit" type="submit" value="submit" onClick={this.addUrlAndMethod} />
          </label>
        </form>
        <div className="recent-route">
          <h3 className="history-title">Recent Routes</h3>
          {this.state.apiUrl.map((url, idx) => <li key="idx"><button className={this.state.methodClass[idx]}>{this.state.apiMethod[idx]}</button> {url}</li>)}
        </div>
      </div>
    )
  }
}


export default Form;


