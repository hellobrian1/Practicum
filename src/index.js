const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('i am using docker')
});
app.get('/', (req, res) => {res.send('Hello World!')});

app.get('/add/:n/:m', (req, res ) => {
    console.log(req.params.n, req.params.m);
    let sum = Number(req.params.n) + Number(req.params.m);
    console.log(sum);
    res.json(sum);
})
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
