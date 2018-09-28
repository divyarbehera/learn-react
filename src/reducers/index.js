import {combineReducers} from 'redux';

import counterReducer from './counter-reducer';
import globalQuoteReducer from './stock-reducer';
import stocksWatchListReducer from './stocks-watchlist-reducer';
import { GLOBAL_QUOTE_FETCHED } from '../actions/stock-action';

const rootReducer = combineReducers({
  globalQuoteReducer,
    counterReducer,
    StocksWatchList:   stocksWatchListReducer  
});


export default rootReducer;