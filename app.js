const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.render('index', { title: 'test node' });
})


app.listen(port, () => {
    console.log("server listening to port " + port);
});
