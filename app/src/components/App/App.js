import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import CurrencyList from '../CurrencyList/CurrencyList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currencies: [],
      baseCurrency: ''
    }
  }

  componentDidMount() {
    fetch('http://api.fixer.io/latest')
    .then(response => response.json())
    .then(apiData => this.setState({ currencies: apiData.rates, baseCurrency: apiData.base }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <CurrencyList currencyName="USDCAD" />
      </div>
    );
  }
}

export default App;
