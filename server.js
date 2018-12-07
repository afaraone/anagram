const http = require('http')
const solve = require('./src/solver')

const server = http.createServer((req, res) => {
  if (req.url !== 'favicon.ico') {
    let query = req.url.split('/')[1]
    let results = JSON.stringify(solve(query))
    res.write(results)
  }
  res.end()
})

server.listen(3000, err => {
  if (err) {
    return console.log('There was an error!')
  }
  console.log('Server running at http://localhost:3000')
});
