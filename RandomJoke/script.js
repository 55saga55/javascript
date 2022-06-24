// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn');

const j = "https://icanhazdadjoke.com";

function display(){
fetch("https://icanhazdadjoke.com",{
    headers: {
        Accept: 'application/json',
       
      },
}).then(function (value) {
  return value.json();
}).then(function (value){
  console.log(value);
      var abc =  `<div id="joke" class="joke">${value.joke}</div>`
      document.getElementById("joke").innerHTML=abc;
})
}

display();

function test(){
  display();
}
