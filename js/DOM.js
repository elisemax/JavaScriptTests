'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item =>{
//     console.log(item);
// });

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'orange';
box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let index = 0; index < hearts.length; index++) {
//     hearts[index].style.backgroundColor = 'blue';
    
// }

hearts.forEach(item=>{
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
//const text = document.createTextNode('test');
div.classList.add('black');
wrapper.append(div);
//hearts[0].after(div);
//hearts[0].replaceWith(circles[0]);

div.innerHTML = "Hello";

