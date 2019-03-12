const express = require('express');
const router = require('./src/routes');
const app = express();
const port = process.env.PORT || 3000;

//set all routes from src/routes
app.use("/", router);

//set views
app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.set("view engine", "html");
app.engine('html', require("consolidate").swig);

app.listen(port, function(){
  console.log(`Listening in port ${port}`);
});
