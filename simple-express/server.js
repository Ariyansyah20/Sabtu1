const express = require('express');
const app = express();
const port = 2020

app.get('/dia', function (ren, res) {
    res.send('Hello Word');
});

app.get('/siapa', function (ren, res) {
    res.send('yowasap');
});

app.get('/dimana', function (ren, res) {
    res.send('hai guys');
});

app.get('/kapan', function (ren, res) {
    res.send('wkwkwkwk');
});

app.get('/kepo', function (ren, res) {
    res.send('dipili gan');
});

app.get('/kenapa', function (ren, res) {
    res.send('siapa aja boleh');
});

app.get('/kemana', function (ren, res) {
    res.send('kepo banget dah');
});

app.get('/aku', function (ren, res) {
    res.send('anda siapa');
});

app.get('/bebep', function (ren, res) {
    res.send('siapa ya?');
});

app.get('lagi', function (ren, res) {
    res.sendFile('${proces.cwd'()})
});

app.listen(3000, function () {
    console.log('server running in port 3000');
});