var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello From Custom Node Server\n');
});

app.listen(process.env.SERVER_PORT || 3000, function () {
  console.log('Example app listening on port ' + (process.env.SERVER_PORT || "3000") +"!");
});

