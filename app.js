const express = require('express');
const PORT = 3000;
const app = express();


app.set('view engine', 'ejs');


const routes = require('./routes');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



// Routes

// Home
app.get('/', routes.home);

// login
app.get('/login', routes.login);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// about jedi
app.get('/About-Jedi', routes.about);

// about Galactic Empire
app.get('/About-Galactic-Empire', routes.aboutgalacticempire);

// not found
app.get('*', routes.notfound);

app.listen(process.env.PORT || 3000);