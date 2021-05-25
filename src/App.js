
import React from 'react';

// import{BrowserRouter, Route} from "react-router-dom";
import Form from './components/form/form.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Results from './components/Results/Results.js';
import Help from './pages/help.js';
import History from './pages/History.js';
import Home from './pages/Home.js';



//reander all 
//hold state 
//do work
 // featch api data
 // change 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       count: 0,
       resultsHeader: '',
       resultsBody: '',
    }
  }

  updateResults = (data, headerData) => {
    this.setState({
      resultHeader: headerData,
      resultsBody: data,
    });
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        <Help/> 
        <History/> 
        <Home/> 
      
        <main className="App-main">
          <Form updateResults={this.updateResults} />
          <Results data={this.state.resultsBody} headerData={this.state.resultHeader} />
        </main>
        <Footer />
     </div>
    )
  }
}


export default App;
