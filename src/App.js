// import './App.scss';
import React from 'react';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Main from './components/main/main.js';
// import Results from './components/Results/Results.js';


// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      count:0,
      resultsHeader:'',
      resultsBody:'',

    }
   
  }


  updateResults = (data,headerData)=>{
    // in order for this to trigger a re-render we need to call a method passed down from React.Component
    // this makes a re-render is triggered
    this.setState({ 
      resultsHeader:headerData,
      resultsBody:data,
     });
  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults} />
        {/* <Results data ={this.state.resultsBody} headerData={this.state.resultsHeader}/>
         */}

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