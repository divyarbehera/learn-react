

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
