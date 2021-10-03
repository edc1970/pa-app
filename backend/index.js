require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

var qs = require('qs')
const axios = require('axios')

const apiBaseUrl = process.env.API_URL
const apiKey = process.env.API_KEY
const client_id = process.env.API_CLIENT_ID

const apiIpGeo = process.env.API_IP_GEO
const apiKeyIpGeo = process.env.API_KEY_IP_GEO

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// API Route for IP GeoLocation
app.get('/ip_geolocation'), (request, response) => {
  let query = request.query
  query.api_key = apiKeyIpGeo
  
  let queryString = qs.stringify(query)
  axios(`${apiIpGeo}?${queryString}`)
  .then(res => {
    response.send(res.data)
  }).catch(error => {
    console.log(error)
  })
}

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

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});