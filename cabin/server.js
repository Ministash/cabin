var express = require("express");
var bodyParser = require("body-parser");
const routes = require("./routes");


var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
