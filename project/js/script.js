/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) done

2) Изменить жанр фильма, поменять "комедия" на "драма" done

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    deleteBlocks: (querySelectorAllX) => {
        querySelectorAllX.forEach(item => {
            item.remove();
        });
    },
    genresChanger: (querySelectorX,newGenre)=>{

       querySelectorX.textContent = newGenre;
    },
    backgroundChanger: (currentImage,newImage)=>{
        currentImage.style.backgroundImage = newImage;
    },
    movieList: (newMovies)=>{
        newMovies.innerHTML = '';
        movieDB.movies.sort();
        for (let index = 0; index < movieDB.movies.length; index++) {
            newMovies.innerHTML += `<li class="promo__interactive-item">${index+ 1 + " " + movieDB.movies[index]}
            <div class="delete"></div>
        </li>`;
        }
        
    }
};

movieDB.deleteBlocks(document.querySelectorAll('.promo__adv img'));
movieDB.genresChanger(document.querySelector('.promo__genre'),'ДРАМА');
movieDB.backgroundChanger(document.querySelector('.promo__bg'),'url("img/bg.jpg")');
movieDB.movieList(document.querySelector('.promo__interactive-list'));