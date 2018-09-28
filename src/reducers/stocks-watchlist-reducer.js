import { ADD_TO_INTRADAY_WATCHLIST } from '../actions/stocks-watchlist-action';

import { TRADE_TYPE_LIST } from '../constants/app-constants';

let defaultWatchList = new Map();
TRADE_TYPE_LIST.forEach((type) => { defaultWatchList.set(type, []); })

const stocksWatchListReducer = (state = defaultWatchList, action) => {
    switch (action.type) {
        case ADD_TO_INTRADAY_WATCHLIST:
            let intraDayWatchList = state.IntraDay;
            (intraDayWatchList.indexOf(action.payload) < 0) && intraDayWatchList.push(action.payload);
            return Object.assign({}, state, { IntraDay: intraDayWatchList });
        default:
            return state;
    }
}

export default stocksWatchListReducer;