import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'react-datetime/css/react-datetime.css'
import { Provider } from 'react-redux'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <Provider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  appJsx, document.getElementById('root'))
