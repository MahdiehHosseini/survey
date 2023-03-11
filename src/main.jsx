import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'

import { store } from './store/main'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
)
