const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let users = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };
    users.push(user);
    console.log(users);
    res.send('User registered successfully');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send('Login successful');
    } else {
        res.send('Invalid email or password');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
