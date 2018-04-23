var express = require('express');
const port = process.env.PORT || 3000

var app = express();

app.get("/", (req, res) => {
    res.send("hola mundo");
    res.end();
})

app.listen(port, () => {
    console.log("el servidor corre en el purto 80")
})