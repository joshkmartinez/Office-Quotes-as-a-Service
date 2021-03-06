var express = require('express')
var app = express()
//var cors = require('cors')
var quotes = require('./quotes')
//sort by person

const api = express.Router()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
api.get(['/quote', '/q', '/r', '/random'], (req, res) => {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]
  //character max param
  res.json(quote)
})
api.get(['/all', '/list', '/a', '/allQuotes'], (req, res) => {
  res.json(quotes)
})
api.get(['/num', 'number', '/n'], (req, res) => {
  res.json(Object.keys(quotes).length)
})
api.get('/hello', (req, res) => {
  res.send('hi')
})
api.get(['/ping', '/pong'], (req, res) => {
  res.send('pong')
})
api.get('/', (req, res) => {
  res.send('This is the Office Quotes as a Service (OQaaS) API')
})
app.use('/api', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
