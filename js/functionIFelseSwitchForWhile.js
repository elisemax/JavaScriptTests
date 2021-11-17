"use strict";

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);

let numberOfFilms;

function start(){

     numberOfFilms = +prompt("How many movies you watch","");
     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies you watch","");
     }
}
function rememberMyFilms(){
    for (let index = 0; index < numberOfFilms; index++) {
    
        const lastFilm = prompt("last film what you see",""),
              awardFilm = prompt("how was good a film","");
            if(lastFilm != null  && awardFilm != null && lastFilm !='' && awardFilm !='' && lastFilm.length<50){
                personalMovieDB.movies[lastFilm]=awardFilm;
            } else{
                index--;
            }
    }
}
function detectPersonalLevel(){
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
}
function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for (let index = 1; index <= 3; index++) {
        
        const faivoriteGenre = prompt(`What is you faivorite genre ${index}?`,"");

        if(faivoriteGenre!=null && faivoriteGenre.length<50 && faivoriteGenre!=''){
            personalMovieDB.genres[index-1] = faivoriteGenre;
        }
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();



