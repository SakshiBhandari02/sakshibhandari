const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hello world from express");
});

app.listen(8000, () => {
    console.log("listing the port at 8000");
});
