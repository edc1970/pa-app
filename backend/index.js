// declare dependency modules
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

var qs = require('qs')
const axios = require('axios')

// declare connection to Heroku Postgres
const { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// declare Bux API environment variables
const apiBaseUrl = process.env.API_URL
const apiKey = process.env.API_KEY
const client_id = process.env.API_CLIENT_ID

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ---------------------------
// API Route for channel_codes
app.get('/channel_codes', (request, response) => {
  let query = request.query
  query.client_id = client_id
  
  let queryString = qs.stringify(query)
  axios(`${apiBaseUrl}/channel_codes?${queryString}`,{
    headers: {
      'x-api-key': apiKey
    }
  }).then(res => {
    response.send(res.data)
  }).catch(error => {
    console.log(error)
  })
})

// API Route for generate_code
app.post('/generate_code', (request, response) => {
  response.set('Access-Control-Allow-Origin','*')
  let payload = request.body
  
  payload.client_id = client_id
  payload = JSON.stringify(payload)
  //console.log(payload)
 
  axios.post(`${apiBaseUrl}/generate_code`, payload, {
    headers: {
      'x-api-key': apiKey 
    }
  }).then(res => {
    console.log(res.data)
    response.send(res.data)
  }).catch(error => {
    console.log(error)
  })
})

// DB query for Plans
app.get('/get_plans', (request, response) => {
  //pool.connect();
  console.log('---------')
  console.log('Get Plans')
  console.log('---------')

  pool
    .query('SELECT * FROM plans ORDER BY plans.id;')
    .then(res => {
      console.log(JSON.stringify(res.rows))
      response.send(JSON.stringify(res.rows))
      //pool.end()
    })
    .catch(err => console.log(err.stack))
})

// Listen to defined port
const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});