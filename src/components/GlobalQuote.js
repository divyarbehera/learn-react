import React, { Component } from 'react'
import { connect } from 'react-redux';

class GlobalQuoteComponent extends Component {
    constructor(props) {
        super(props);
        this.loadGlobalQuote = this.loadGlobalQuote.bind(this);
        this.parseGlobalQuote = this.parseGlobalQuote;
    }

    loadGlobalQuote(globalquote) {
        let parsedGlobalquote = this.parseGlobalQuote(globalquote);
        return parsedGlobalquote ? <div>
            <div>{`Open Price : ${parsedGlobalquote.open}`}</div>
            <div>{`Today's Low : ${parsedGlobalquote.low}`}</div>
            <div>{`Today's High : ${parsedGlobalquote.high}`}</div>
            <div>{`Price : ${parsedGlobalquote.price}`}</div>
            <div>{`Volume : ${parsedGlobalquote.volume}`}</div>
            <div>{`Previous Close : ${parsedGlobalquote.previousclose}`}</div>
        </div> : "No quote found";

    }

    parseGlobalQuote(sGlobalquote) {
        if(!sGlobalquote){return "";}
        var globalquote = JSON.parse(sGlobalquote);
        var parsedGlobalquote = {}; for (var prop in globalquote) { 
            parsedGlobalquote[prop.slice(4)] = globalquote[prop]; }
        return parsedGlobalquote;
    }

    render() {
        console.log('globalquote');
        console.log(this.props);
        return (
            <div>
                {this.loadGlobalQuote(this.props.globalQuote)}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        globalQuote: state.globalQuoteReducer[0] && JSON.stringify(state.globalQuoteReducer[0])
    };
}


export default connect(mapStateToProps)(GlobalQuoteComponent);