const express = require('express')
const app = express()
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.send("hello from the express")
})


app.listen(port, () => {
    console.log("server listening to port " + port);
});
