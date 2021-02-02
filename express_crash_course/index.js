const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars")
const logger = require('./middleware/logger');
const { title } = require('process');
const app = express();
const members = require('./Members')


/*app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname, "public", "index.html"));
})*/



//Init middleware

//This line will give date time, etc.
//app.use(logger)

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Homepage Route
app.get("/", (req, res) => {
    res.render('index', { title: 'Member App' , members})
})

//Set Static Folder
app.use(express.static(path.join(__dirname, "public")))

//Members Api Routes
// Because /api/members is Written here, we write only / in routes members
app.use("/api/members", require("./routes/api/members"))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});