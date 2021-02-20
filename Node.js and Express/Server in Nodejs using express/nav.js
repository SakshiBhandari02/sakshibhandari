const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("welcome to home page");
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});

app.get('/about', (req, res) => {
    res.send("welcome to about us page");
});

app.get('/contact', (req, res) => {
    res.send("welcome to contact us page");
});