import React from 'react'
import {hydrate} from 'react-dom'
import App from './app'
import {BrowserRouter} from 'react-router-dom'

console.log('browser loaded')

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
)
