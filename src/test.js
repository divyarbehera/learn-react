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