const express = require('express');
const app = express();
const port = 8001;

app.get("/", (req, res) => {
    res.write("<h1>welcome to home page</h1>")
    res.write("<h1>welcome to again home page</h1>")
    res.send()
});

app.get("/about", (req, res) => {
    res.send("welcome to about page")
});

app.get("/contact", (req, res) => {
    res.status(200).send("welcome to contact page")
});

app.get("/temp",(req, res) => {
    res.json([{
        id: 1,
        name: "naeem",
    },
    {
        id: 1,
        name: "naeem",
        },
    {
        id: 1,
        name: "naeem",
    }]);
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})