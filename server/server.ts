import express from 'express'
import { join } from 'node:path'
import axios from 'axios'

import location from './routes/locations'
import profile from './routes/profile'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/locations', location)
server.use('/api/v1/profile', profile)

server.get('/api/v1/address-autocomplete', async (req, res) => {
  console.log('Address autocomplete route accessed')
  const input = typeof req.query.input === 'string' ? req.query.input : ''
  const encodedInput = input ? encodeURIComponent(input) : ''
  const country = 'NZL' // ISO3 Alpha-3 country code for New Zealand
  const authId = '428cfc9c-0fbb-e8f2-0c9d-28ad24f66be9'
  const authToken = 'VFPoT4kXly8sLJEdHR7G'
  const url = `https://international-autocomplete.api.smartystreets.com/lookup?search=${encodedInput}&country=${country}&include_only_locality=Auckland`

  try {
    const response = await axios.get(url, {
      headers: {
        Host: 'international-autocomplete-pro.api.smartystreets.com',
        Authorization: `Bearer ${authId}:${authToken}`,
        Referer: 'https://neighbours.com',
      },
    })
    console.log('API response:', response.data)
    res.json(response.data)
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Error fetching address autocomplete' })
  }
})

export default server

// Route for proxying the address autocomplete request to SmartyStreets API
// server.get('/api/v1/address-autocomplete', async (req, res) => {
//   console.log('Address autocomplete route accessed')
//   const input = typeof req.query.input === 'string' ? req.query.input : ''
//   const encodedInput = input ? encodeURIComponent(input) : ''
//   const country = 'NZL' // ISO3 Alpha-3 country code for New Zealand
//   const apiKey = '171674315079624603'
//   const authId = '428cfc9c-0fbb-e8f2-0c9d-28ad24f66be9'
//   const authToken = 'VFPoT4kXly8sLJEdHR7G'
//   // const url = `https://international-autocomplete.api.smartystreets.com/lookup?auth-id=${authId}&auth-token=${authToken}&search=${encodeURIComponent(
//   //   input
//   // )}&country=NZL&include_only_locality=Auckland`
//   // const url = `https://international-autocomplete.api.smartystreets.com/lookup?key=${apiKey}&search=${encodedInput}&country=NZL&include_only_locality=Auckland`

//   const url = `https://international-autocomplete.api.smartystreets.com/lookup?search=${encodeURIComponent(
//     encodedInput
//   )}&auth-id=${authId}&auth-token=${authToken}&country=NZL&include_only_locality=Auckland`
//   console.log('API URL:', url)
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Host: 'international-autocomplete-pro.api.smartystreets.com',
//         Referer: 'https://neighbours.com',
//       },
//     })
//     console.log('API response:', response.data)
//     res.json(response.data)
//   } catch (error) {
//     console.error('API error:', error)
//     // console.log(error.status)
//     // console.log(error.statusText)
//     // console.log(error.response.data)

//     res.status(500).json({ error: 'Error fetching address autocomplete' })
//   }
// })

// export default server
