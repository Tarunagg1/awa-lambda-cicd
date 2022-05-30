const express = require('express');
const serverless = require('serverless-http');
const app = express();


app.get('/hello', (req, res) => {
    return res.send("hello world 1 testing!");
})


app.listen(3000,() => {
    console.log('example app listning on port 3000');
})

module.exports.Handler = serverless(app);
