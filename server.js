var express = require('express');
var  app = express();


app.use(express.static(__dirname +  '/client/'));

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!')
})

