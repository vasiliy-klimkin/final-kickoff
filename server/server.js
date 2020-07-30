const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({foo:'bar'});
})

server.listen(8080, ()=> console.log("Server is Listening on port 8080"));