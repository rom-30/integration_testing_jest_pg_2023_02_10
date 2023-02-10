const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const server = express();
server.use(cors());
server.use(express.json());
server.use(logger('dev'));

const dogRoutes = require('./routes/dogs')
const ownerRoutes = require('./routes/owners')

server.use('/dogs', dogRoutes)
server.use('/owners', ownerRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
