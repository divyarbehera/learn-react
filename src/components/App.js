import React, { Component } from 'react'
import StockMarket from './StockMarket'
import '../styles/app.css'
import CounterComponent from './counter';
import { StocksWatchList } from './StocksWatchList';


export default class App extends Component {

  render() {
    const divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px"
    };
    return (
      <div >
        <div className="app-header">
          Welcome to Test!
        </div><div style={divStyle}>
          <StockMarket />
          <br />
          <CounterComponent />
          <br/>
          <StocksWatchList/>
        </div>
      </div>
    );
  }
}
