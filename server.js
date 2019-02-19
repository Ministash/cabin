var express = require("express");
var bodyParser = require("body-parser");
const routes = require("./routes");
var app = express();
const db = require('./models');

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });