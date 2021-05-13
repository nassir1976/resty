// import './App.scss';
import React from 'react';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Main from './components/main/main.js';

// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      number: 1,
    }
   
  }


  log(num) {
    console.log('Hey from component');
    // in order for this to trigger a re-render we need to call a method passed down from React.Component
    // this makes a re-render is triggered
    this.setState({ number: num + 1 });
  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form />

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