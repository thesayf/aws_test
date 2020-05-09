const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("I am live on the internet using aws")
})


app.listen(80, () => console.log("waiting on port 80"));