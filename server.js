const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const genreRoutes = require('./routes/genre');
const actorRoutes = require('./routes/actor');
const filmRoutes = require('./routes/film');

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, ()=> {
    console.log(`Server running on port ${HTTP_PORT}`);
});


//Basic route
app.get('/', (req, res)=> {
    res.json({ message: 'Hello World'});
});

/*********************       /genre       **************************/

app.use('/api/genre', genreRoutes);

/*********************       /actor       **************************/

app.use('/api/actor', actorRoutes);

/*********************       /film       **************************/

app.use('/api/film', filmRoutes);

/*********************       *****       **************************/