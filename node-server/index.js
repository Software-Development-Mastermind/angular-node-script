const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static('dist'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/api/message', (request, response) => {
    response.send({ message: 'Hello world!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))