import { GLOBAL_QUOTE_FETCHED } from '../actions/stock-action';

const globalQuoteReducer = (state = [], action) => {
  
  switch (action.type) {
    case GLOBAL_QUOTE_FETCHED:
      return [action.payload];
    default:
      return state;
  }
}

export default globalQuoteReducer;