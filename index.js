import path from 'path'
import express from 'express'
import mustacheExpress from 'mustache-express'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'

import App from '@app/app'

const server = express()
const port = 3000

server.engine('mustache', mustacheExpress())

server.set('views', './views')
server.set('view engine', 'mustache')

server.use('/assets/scripts', express.static('dist/scripts'))
server.use('/assets/styles', express.static('dist/styles'))

server.get('/*', (request, response) => {
  const renderedHTML = renderToString(
    <StaticRouter location={request.url} context={{}}>
      <App />
    </StaticRouter>
  )

  response.render('app.mustache', {
    body: renderedHTML,
    title: 'Live TV Streaming'
  })
})

server.listen(port, () => console.log(`Listening on port ${port}!`))
