const express = require('express');
const helmet = require('helmet');
const cors = this.require('cors');

const cohortsRouter = require("../cohorts/router");
const studentsRouter = require("../studentss/router");

const server = express();



//  middleware
server.use(express.json())
server.use(cors());
server.use(helmet());

//  routes
server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);


server.get('/', (req, res) => {
  res.json({ api: "up and at em" })
})


module.exports = server;