"use strict";

const arr = [1,2,3,6,8];

arr.pop();
arr.push(5);
console.log(arr);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(item,i,arr){

});

const soldier = {
    health: 400,
    armor: 100
};
const john = {
    health:100
};
