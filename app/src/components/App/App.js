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
    .then(apiData => {
      const currencies = []

      for(const currency in apiData.rates) {
        let obj = {
          currency,
          rate: apiData.rates[currency]
        }

        currencies.push(obj)
      }

      this.setState({
        currencies,
        baseCurrency: apiData.base
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar currency={this.state.baseCurrency} />
        <CurrencyList currencies={this.state.currencies} />
      </div>
    );
  }
}

export default App;
