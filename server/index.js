const express = require('express');
const cors  = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use('/codenames/spymaster', express.static(__dirname + '/../client'));
app.use('/codenames/board', express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../client'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
