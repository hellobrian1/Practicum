const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Addition route
app.get('/add/:n/:m', (req, res) => {
    console.log(req.params.n, "+", req.params.m);
    let sum = Number(req.params.n) + Number(req.params.m);
    console.log("Sum:", sum);
    res.json({ result: sum });
});

// Subtraction route
app.get('/subtract/:n/:m', (req, res) => {
    console.log(req.params.n, "-", req.params.m);
    let difference = Number(req.params.n) - Number(req.params.m);
    console.log("Difference:", difference);
    res.json({ result: difference });
});

// Multiplication route
app.get('/multiply/:n/:m', (req, res) => {
    console.log(req.params.n, "*", req.params.m);
    let product = Number(req.params.n) * Number(req.params.m);
    console.log("Product:", product);
    res.json({ result: product });
});

// Division route
app.get('/divide/:n/:m', (req, res) => {
    console.log(req.params.n, "/", req.params.m);
    let quotient = Number(req.params.n) / Number(req.params.m);
    console.log("Quotient:", quotient);
    res.json({ result: quotient });
});

// Default route
app.get('/', (req, res) => {
    console.log("Default route hit");
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
