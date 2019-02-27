export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body>
        <div id="app">${body}</div>
      </body>
      <script src="/scripts/app.js"></script>
    </html>
  `
}
