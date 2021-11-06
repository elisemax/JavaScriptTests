"use strict";

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);

const numberOfFilms = +prompt("How many movies you watch","")
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
const lastFilm =prompt("last film what you see","");
const awardFilm = prompt("how was good a film","");
personalMovieDB.movies[lastFilm,awardFilm];