const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello world from naeem")
});

app.get("/about",(req, res) => {
    res.send("hello world from about page")
})

app.listen(8000, () => {
    console.log("listening at port 8000");
})