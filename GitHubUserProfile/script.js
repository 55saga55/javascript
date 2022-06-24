const APIURL = 'https://api.github.com/users'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



// myuserList = [];

fetch(APIURL + search.value)
.then(function (value){
    return value.json();
}).then(function (value){
    console.log(value);
});
    
