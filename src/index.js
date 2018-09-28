import React from 'react'
import {render} from 'react-dom'


import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  store.subscribe(()=>{
    console.log('store changed', store.getState());
  })
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )