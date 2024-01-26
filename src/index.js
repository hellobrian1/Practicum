const express = require('express');
// const app = express();
// const port = 3000;
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {res.send('Hello World!')});

app.get('/add/:n/:m', (req, res ) => {
    console.log(req.params.n, req.params.m);
    let sum = Number(req.params.n) + Number(req.params.m);
    console.log(sum);
    res.json(sum);
})
app.listen(port);