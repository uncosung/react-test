const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const port = 3001;

server.use(express.static(path.join(__dirname, '../../client/dist')));
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  next();
})
server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
