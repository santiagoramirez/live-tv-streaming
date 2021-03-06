import express from 'express'
import mustacheExpress from 'mustache-express'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'

import App from '@app/ServerApp.jsx'

const server = express()
const port = 3000

server.engine('mustache', mustacheExpress())

server.set('views', './views')
server.set('view engine', 'mustache')

server.use('/assets/scripts', express.static('dist/scripts'))
server.use('/assets/styles', express.static('dist/styles'))

server.get('/watch*', (request, response) => {
  const renderedHTML = renderToString(
    <StaticRouter location={request.url} context={{}}>
      <App />
    </StaticRouter>
  )

  response.render('app.mustache', {
    body: renderedHTML,
    title: 'SantiTV − Live TV, Videos On Demand'
  })
})

server.listen(port, () => console.log(`Listening on port ${port}!`))
