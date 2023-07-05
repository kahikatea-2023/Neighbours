import express from 'express'
import { join } from 'node:path'

import location from './routes/locations'
import profile from './routes/profile'
import commentsRoute from './routes/comments'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/locations', location)
server.use('/api/v1/profile', profile)
server.use('/api/v1/comments', commentsRoute)

export default server
