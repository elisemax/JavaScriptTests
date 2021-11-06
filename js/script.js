"use strict";

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);

const numberOfFilms = +prompt("How many movies you watch","");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for (let index = 0; index < numberOfFilms; index++) {
    
    const lastFilm = prompt("last film what you see",""),
          awardFilm = prompt("how was good a film","");
        if(lastFilm != null  && awardFilm != null && lastFilm !='' && awardFilm !='' && lastFilm.length<50){
            personalMovieDB.movies[lastFilm]=awardFilm;
        } else{
            index--;
        }
}

switch (true){
    case (personalMovieDB.count < 10): 
        alert("wathed a low count of films"); 
        break;
    case (personalMovieDB.count>=10 && personalMovieDB.count0 <= 30):
        alert("Typiccal wacher"); 
        break; 
    case (personalMovieDB.count>30):
        alert("You are cinema man");
        break;
    default:
        alert("Invalid data");
        break;
}


console.log(personalMovieDB);


