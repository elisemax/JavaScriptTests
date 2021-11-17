"use strict";

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);










const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function(){

        personalMovieDB.count = +prompt("How many movies you watch","");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many movies you watch","");
        }
   },
   rememberMyFilms: function(){
    for (let index = 0; index < personalMovieDB.count; index++) {
    
        const lastFilm = prompt("last film what you see",""),
              awardFilm = prompt("how was good a film","");
            if(lastFilm != null  && awardFilm != null && lastFilm !='' && awardFilm !='' && lastFilm.length<50){
                personalMovieDB.movies[lastFilm]=awardFilm;
            } else{
                index--;
            }
    }
},
detectPersonalLevel: function(){
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
},
showMyDB: function(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
},
writeYourGenres:function(){
    for (let index = 1; index <= 3; index++) {
        
        let faivoriteGenre = prompt(`What is you faivorite genre ${index}?`,"");

        if(faivoriteGenre!=null && faivoriteGenre.length<50 && faivoriteGenre!=''){
            
            personalMovieDB.genres[index-1] = faivoriteGenre;
        }

    }
    personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Your faivorite genre is${i+1} - this is ${item}`);
    });

},
toggleVisibleDB: ()=>{
    if(personalMovieDB.privat === false){
        personalMovieDB.privat = true;
    }
    if(personalMovieDB.privat === true){
        personalMovieDB.privat = false;
    }
    
}
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleDB();
