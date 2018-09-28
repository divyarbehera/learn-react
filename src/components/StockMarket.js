import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getGlobalQuote } from '../actions/stock-action'
import GlobalQuoteComponent from './GlobalQuote'


class StockMarketComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyCode: "",
            companyData: "",
            companieList: [{ Code: "MARUTI", Name: "Maruti Suzuki" },
            { Code: "BRITANNIA", Name: "Britannia Company" },
            { Code: "PENIND", Name: "Pennar Industries" }]
        }

        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.addStocksToIntraDayWatchList = this.addStocksToIntraDayWatchList.bind(this);
    }
    onCompanyChange(e) {
        var companyCode = e.target.value;
        this.props.dispatch(getGlobalQuote(companyCode));
    }

    addStocksToIntraDayWatchList(e) {
        var companyCode = e.target.value;
        this.props.dispatch(addDataToWatchList(companyCode));
    }
    componentDidMount() {
        console.log("mounted");
    }


    render() {

        return (
            <div>
                <div>
                    <select onChange={this.onCompanyChange}>
                        <option value="" defaultValue>--SELECT--</option>
                        {this.state.companieList.map(element => <option value={element.Code} key={element.Code}>{element.Name}</option>)}
                    </select>
                </div>
                <div>
                    Add stocks to WatchList&emsp;:<br/>
                    <select>
                        <option value="" defaultValue>--SELECT--</option>
                        {this.state.companieList.map(element => <option value={element.Code} key={element.Code}>{element.Name}</option>)}
                    </select>&emsp;
                    <button onClick={this.addStocksToIntraDayWatchList}>ADD-TO-INTRADAY</button>
                </div>
                <div><GlobalQuoteComponent /></div>
            </div>
        )
    }
}
const StockMarket = connect(null)(StockMarketComponent);

export default StockMarket;