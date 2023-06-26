const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    });
});

app.get('/getdata', (req, res) => {
    axios.get('http://localhost:8000/api/getdata')
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    });
});

app.listen(port, () => {
    console.log(`Node.js API server listening on port ${port}`);
});
