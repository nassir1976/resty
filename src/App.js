
import React from 'react';

import axios from 'axios';
import Form from './components/form/form.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Main from './components/main/main.js';
import Results from './components/Results/Results.js';
// import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],

    }
  }
//get data
  fetchData = async (options) => {

    const response = await axios({
      method: options.method || "get",
      url: options.url,
      data: options.body && JSON.parse(options.body)
    });

    const results = response.data.results;
    this.setState({ results });
  }

  render() {
    return (


      <div className="App">
        <Header />
        <Form handler={this.fetchData} />
        <Results data={this.state.results} />
        <div>
          <Main />
        </div>

        <div>
          <Footer />
        </div>

      </div>

    )
  }
}



export default App;
