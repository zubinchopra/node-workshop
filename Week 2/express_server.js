const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Response to GET request');
    res.end();
});

app.put('/', (req, res) => {
    res.send('Response to PUT request');
    res.end();
});

app.post('/', (req, res) => {
    res.send('Response to POST request');
    res.end();
});

app.delete('/', (req, res) => {
    res.send('Response to DELETE request');
    res.end();
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
})