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

// Route for proxying the address autocomplete request to SmartyStreets API
server.get('/api/v1/address-autocomplete', async (req, res) => {
  const input = req.query.input as string
  const apiKey = '171674315079624603'
  const country = 'NZL' // ISO3 Alpha-3 country code for New Zealand
  const url = `https://international-autocomplete.api.smartystreets.com/lookup?key=${apiKey}&search=${encodeURIComponent(
    input
  )}&country=${country}`

  try {
    const response = await axios.get(url, {
      headers: {
        Referer: 'https://neighbours.com', // Replace with your website URL
      },
    })
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching address autocomplete' })
  }
})

export default server
