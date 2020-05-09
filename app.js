const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("I am live on the internet using aws")
})


app.listen(3000, () => console.log("waiting on port 3000"));