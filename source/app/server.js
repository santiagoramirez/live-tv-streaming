import express from 'express'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import App from './app'
import template from './template'

const server = express()
const port = 3000

server.use('/scripts', express.static('build/assets/scripts'));
//server.use('/build/styles', express.static('styles'));

server.get('/*', (req, res) => {
  const context = {}
  const appString = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }))
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
