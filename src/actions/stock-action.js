

export const GLOBAL_QUOTE_FETCHED = 'STOCK:GLOBAL_QUOTE_FETCHED';

export function getGlobalQuote(companyCode) {
    return (dispatch) => {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NSE:${companyCode}&apikey=WPB3IPUSNACYZ2FM`)
            .then(data => data.json())
            .then(data => {
                dispatch(loadGlobalQuote(data["Global Quote"]));
            });
    }
}

export function loadGlobalQuote(stockQuote) {
    return {
        type: GLOBAL_QUOTE_FETCHED,
        payload: stockQuote
    };
}


fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:DHFL&interval=5min&apikey=WPB3IPUSNACYZ2FM`)
            .then(data => data.json())
            .then(data => {
var timeSeriesData = {};
var intraDayRecords = [];

for (var prop in data){
	if(prop.indexOf('Time Series')<0){continue;}
	timeSeriesData =  data[prop];
}
console.log(timeSeriesData);
for (var prop in timeSeriesData){
	var dt = new Date(prop);
	if(!dt.getTime){ continue;}
	intraDayRecords.push({Time:new Date(dt.getTime() - 1000 * 3600 * 9.5), Quoate:timeSeriesData[prop]});
}
console.log(intraDayRecords);
 });