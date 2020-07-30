const express = require('express');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.json({foo:'bar'});
})

app.listen(PORT, ()=> console.log("Server is Listening on port 8080"));