export const ADD_TO_INTRADAY_WATCHLIST = 'STOCK:ADD_TO_INTRADAY_WATCHLIST';

export function addStockToWatchList({ typeOfWatchList, companyCode }) {
    return (dispatch) => {
        switch (typeOfWatchList) {
            case 'INTRADAY':
                dispatch(addToWatchList(ADD_TO_INTRADAY_WATCHLIST, companyCode));
                break;
            default:
                break;

        }
    }
}


function addToWatchList(type, stock) {
    return {
        type: type,
        payload: stock
    };
}