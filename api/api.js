var express = require('express')
var app = express()
var quotes = require('./quotes')
//sort by person

const api = express.Router()

api.get(['/quote', '/q', '/r', '/random'], (req, res) => {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]
  //character max param
  res.json(quote)
})
api.get(['/all', '/list', '/a', '/allQuotes'], (req, res) => {
  res.json(quotes)
})
api.get('/hello', function(req, res) {
  res.send('hi')
})
api.get(['/ping', '/pong'], function(req, res) {
  res.send('pong')
})
api.get('/', function(req, res) {
  res.send('This is the Office Quotes as a Service (OQaaS) API')
})
app.use('/api', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
