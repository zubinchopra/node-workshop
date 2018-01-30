const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
    res.end();
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
})