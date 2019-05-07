const moviesJSON = require('../movies.json');

// Home
exports.home = (req, res) => {

    let movies = moviesJSON.movies;

    res.render('home', {
        title: 'Star Wars Movie',
        movies: movies
    });
};

// movie_single
exports.movie_single = (req, res) => {

    let episode_number = req.params.episode_number;

    let movies = moviesJSON.movies;
    
    if (episode_number >= 1 && episode_number <= 6) {

        let movie = movies[episode_number - 1];

        let title = movie.title;

        let main_characters = movie.main_characters;

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    } else {
        res.render('notFound', {
            movies: movies,
            title: "Jedi Alert:(This page not available)"
        });
    }

};

// not found
exports.notfound = (req, res) => {
    let movies = moviesJSON.movies;

    res.render('notFound', {
        movies: movies,
        title: "Darth Vader Alert:(404 Not Found)"
    });
};

// about jedi
exports.about = (req, res) => {

    let movies = moviesJSON.movies;

    res.render('about', {
       title: "About Jedi",
        movies: movies
    });
};

// about Galactic Empire
exports.aboutgalacticempire = (req, res) => {
    let movies = moviesJSON.movies;

    res.render('aboutgalacticempire', {
        title: "About Galactic Empire",
        movies: movies
    })
};

// login
exports.login = (req, res) => {
    let movies = moviesJSON.movies;

    res.render('login', {
        title: "login page",
        movies: movies
    })
}