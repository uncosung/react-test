const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const port = 3001;

server.use(express.static(path.join(__dirname, '../../client/dist')));
server.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
