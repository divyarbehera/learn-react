//#1
/*
var parseQuote = (quote) =>{
    var parsedQuote = {}; for (var prop in quote) { 
        parsedQuote[prop.slice(3)] = quote[prop]; }
    return parsedQuote;
}

var getIntraDayQuote = (companyCode) => {
return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:${companyCode}&interval=5min&apikey=WPB3IPUSNACYZ2FM`)
.then(data => data.json())
.then(data => {
    var timeSeriesData = {};
    var intraDayRecords = [];

    for (var prop in data) {
        if (prop.indexOf('Time Series') < 0) {
            continue;
        }
        timeSeriesData = data[prop];
    }
    for (var prop in timeSeriesData) {
        var dt = new Date(prop);
        if (!dt.getTime) {
            continue;
        }
        intraDayRecords.push({
            Time: new Date(dt.getTime() + 1000 * 3600 * 9.5),
            Quoate: timeSeriesData[prop]
        });
    }
    return intraDayRecords.map(x=>x["Quoate"]&&parseQuote(x["Quoate"]));
});
}
getIntraDayQuote('INFIBEAM').then(d => {console.log(d);}).catch(e=>{console.log(e);})
*/

//#2

// var parseQuote = (quote) => {
//     var parsedQuote = {};
//     for (var prop in quote) {
//         parsedQuote[prop.replace(/^\d{1,3}\.(\s)*/,'')] = quote[prop];
//     }
//     return parsedQuote;
// }
// var getIntraDayQuote = async (companyCode) => {
//     return result = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:${companyCode}&interval=5min&apikey=WPB3IPUSNACYZ2FM`)
//         .then(data => data.json())
//         .then(data => {
//             let timeSeriesData = {};
//             let intraDayRecords = [];

//             for (let prop in data) {
//                 if (prop.indexOf('Time Series') < 0) {
//                     continue;
//                 }
//                 timeSeriesData = data[prop];
//             }
//             for (let prop in timeSeriesData) {
//                 let dt = new Date(prop);
//                 if (!dt.getTime) {
//                     continue;
//                 }
// 				let dtIST =new Date(dt.getTime() + 1000 * 3600 * 9.5);
//                 intraDayRecords.push({
//                     Time: dtIST,
//                     Quoate: Object.assign({}, parseQuote(timeSeriesData[prop]), {time:dtIST})
//                 });
//             }
//             return intraDayRecords;
//         });
// }


/*
'[{"value":"nifty","text":"Nifty 50"},{"value":"juniorNifty","text":"Nifty Next 50"},{"value":"niftyMidcap50","text":"Nifty Midcap 50"},{"value":"cnxAuto","text":"Nifty Auto"},{"value":"bankNifty","text":"Nifty Bank"},{"value":"cnxEnergy","text":"Nifty Energy"},{"value":"cnxFinance","text":"Nifty Financial Services"},{"value":"cnxFMCG","text":"Nifty FMCG"},{"value":"cnxit","text":"Nifty IT"},{"value":"cnxMedia","text":"Nifty Media"},{"value":"cnxMetal","text":"Nifty Metal"},{"value":"cnxPharma","text":"Nifty Pharma"},{"value":"cnxPSU","text":"Nifty PSU Bank"},{"value":"cnxRealty","text":"Nifty Realty"},{"value":"niftyPvtBank","text":"Nifty Private Bank"},{"value":"cnxCommodities","text":"Nifty Commodities"},{"value":"cnxConsumption","text":"Nifty India Consumption"},{"value":"cpse","text":"Nifty CPSE"},{"value":"cnxInfra","text":"Nifty Infrastructure"},{"value":"cnxMNC","text":"Nifty MNC"},{"value":"ni15","text":"Nifty Growth Sector 15"},{"value":"cnxPSE","text":"Nifty PSE"},{"value":"cnxService","text":"Nifty Services Sector"},{"value":"nseliquid","text":"Nifty100 Liquid 15"},{"value":"niftyMidcapLiq15","text":"Nifty Midcap Liquid 15"},{"value":"cnxDividendOppt","text":"Nifty Dividend Opportunities 50"},{"value":"nv20","text":"Nifty50 Value 20"},{"value":"niftyQuality30","text":"Nifty100 Quality 30"},{"value":"nifty50EqualWeight","text":"NIFTY50 Equal Weight"},{"value":"nifty100EqualWeight","text":"NIFTY100 Equal Weight"},{"value":"nifty100LowVol30","text":"NIFTY100 Low Volatility 30"},{"value":"niftyAlpha50","text":"NIFTY Alpha 50"},{"value":"sovGold","text":"Sovereign Gold Bonds"},{"value":"foSec","text":"FO Stocks"},{"value":"etf","text":"ETF"},{"value":"goldEtf","text":"Gold ETF"},{"value":"nifty50Etf","text":"Nifty 50 ETF"},{"value":"iL","text":"Institutional Stock Watch"},{"value":"bL","text":"BL Stock Watch"},{"value":"cbmSecList","text":"Bonds in CM"}]'
https://www.nseindia.com/homepage/peDetails.json
https://www.nseindia.com/homepage/Indices1.json
https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/juniorNiftyStockWatch.json
https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json*/
