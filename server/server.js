const express = require('express');
const path = require('path');

const app = express();
const projectPath = path.join(__dirname, '../');


app.use(express.static(projectPath + '/client'));

app.get('/', (req, res) => {
    res.sendFile(projectPath + '/client/index.html');
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});