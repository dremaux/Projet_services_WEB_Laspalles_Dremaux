const express = require("express");
const app = express();

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, ()=> {
    console.log(`Server running on port ${HTTP_PORT}`);
});

//Basic route
app.get('/', (req, res)=> {
    res.json({ message: 'Hello World'});
});



app.get('/actor', (req, res)=> {
    res.json({ message: 'Hello get actor'});
});
/*
app.get('/actor/{id}', (req, res)=> {
    res.json({ message: 'Hello actor'});
});
*/

app.post('/actor', (req, res)=> {
    res.json({ message: 'Hello post actor'});
});