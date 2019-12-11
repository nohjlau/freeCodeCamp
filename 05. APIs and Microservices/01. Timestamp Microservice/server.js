// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Completed Timestamp Microservice
app.get("/api/timestamp/:date_string?", function (req, res) {
  let date_string = req.params.date_string;
  if(!date_string) { 
    res.json({"unix": new Date().getTime(), "utc":new Date().toUTCString()});
  } else {
    let date = new Date(req.params.date_string);
    if(/\d{5,}/.test(date_string)) { // Trick is 5 or more digits means unix timestamp. 4 could be year.
      date = parseInt(date_string);
      res.json({"unix": date, "utc": new Date(date).toUTCString()});
    } else 
    if(!Date.parse(date)) { res.json({"error": "Invalid Date"})
    } else {
        res.json({"unix": date.getTime(), "utc": date.toUTCString()});
    }
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});