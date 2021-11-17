"use strict";

function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}
function second(){
    console.log(2);
}
first();
second();

function learnJS(lang,Callback){
    console.log(`I learn: ${lang}`);
    Callback();
}
learnJS('JavaScript',function(){
    console.log("lesson done");
});

const options ={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

for(let key in options){
    if(typeof(options[key])==='object')
    {
        for(let i in options[key]){
            console.log(`property ${i} have value ${options[key][i]}`);
        }
    }else{
        console.log(`property ${key} have value ${options[key]}`);
    }
    
}