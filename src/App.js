import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import CadastroProdutos from './CadastroProdutos';

class App extends Component {
    
  constructor(props){
      super(props);
      
      this.state = {
          data: "Os dados apareceram aqui"
      }
  }  
   
  getData(){
      return new Promise(() => $.get('http://node19.codenvy.io:46776/data')
        .then(data => this.setState({ data })))
  } 
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getData.bind(this)}>GetData</button>
        <br/>
        <p>{this.state.data}</p>
          <CadastroProdutos></CadastroProdutos>
      </div>
    );
  }
}

export default App;
