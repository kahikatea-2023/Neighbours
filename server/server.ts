import express from 'express'
import { join } from 'node:path'

import location from './routes/locations'
import profile from './routes/profile'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/locations', location)
server.use('/api/v1/profile', profile)

export default server
