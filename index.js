var express = require('express');


var app = express();

app.get("/", (req, res) => {
    res.send("hola mundo");
})

app.listen(3001, () => {
    console.log("el servidor corre en el purto 80")
})