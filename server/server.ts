import express from 'express'
import { join } from 'node:path'

import location from './routes/locations'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/locations', location)


export default server
