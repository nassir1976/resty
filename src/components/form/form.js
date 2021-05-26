

import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ ...this.state, [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if( this.state.url && this.state.method) {
      this.props.handler(this.state)
    }
  }

  render() {
    return (
      
      <form data-testid="apiform"   className="App-form" onSubmit={this.handleSubmit}>
        <label>
          <input className="url" name="url" placeholder="https://pokeapi.co/api/v2/pokemon" onChange={this.handleChange} />
        </label>
        <label >
          <input className="radio" name="method"  value="get" type ="radio" onChange={this.handleChange} /> <span>GET</span>
        </label>
        <label>
          <input className="post" name="method" value="post" type="radio" onChange={this.handleChange} /> <span>POST</span>
        </label>
        <label>
          <input className="post" name="method" value="post" type="radio" onChange={this.handleChange} /> <span>Put</span>
        </label>
        <label>
          <input className="post" name="method" value="post" type="radio" onChange={this.handleChange} /> <span>Delete</span>
        </label>
        <button>Submit</button>
        <div>
          <textarea className="body" onChange={this.handleChange}></textarea>
        </div>
      </form>
    )
  }

}

export default Form;
