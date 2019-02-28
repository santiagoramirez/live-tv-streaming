import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from '@app/App.jsx'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
)
