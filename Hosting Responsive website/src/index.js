const path = require("path");
const { static } = require('express');
const express = require('express');
const app = express();
const port = 8000;

//Printing current dir path in console
console.log(__dirname);

//path.join(__dirname, '../public'):- changes current dir path and prints user difined dir path in console
console.log(path.join(__dirname, '../public'));

// saving the path to public directory in staticPath
const staticPath = path.join(__dirname, '../public');

//express.static(staticPath):- is a builtin middleware function to show static html page(NOTE:- html file should be named .html not .hmt)
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello world from naeem")
});

app.get("/about",(req, res) => {
    res.send("hello world from about page")
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})