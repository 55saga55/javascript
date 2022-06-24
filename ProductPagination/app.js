var API = "https://fakestoreapi.com/products";

var array = [];

fetch(API).then(function (value) {
  return value.json();
}).then(function (value) {

  array = value;

  console.log(array);

  function display(array, start, end) {

    var html = "";

    for (let i = start; i < end; i++) {

      html += ` <article class="menu-item id="test">
      <img src="${array[i].image}" alt="menu item" class="photo" />
      <div class="item-info">
        <header>
          <h4>${array[i].title}</h4>
          <h4 class="price">${array[i].price}</h4>
        </header>
        <p class="item-text">
        ${array[i].description}
        </p>
      </div>
    </article>`

      // <div class="card" id="test">
      //     <img class="card-img-top" src="${array[i].image}" alt="Card image cap"/>
      //     <div class="card-body">
      //       <h5 class="card-title">${array[i].title}</h5>
      //       <h5 class="card-price">${array[i].price}</h5>
      //       <p class="card-text">
      //        ${array[i].description}
      //       </p>
      //       <a href="#" class="btn btn-primary">Go somewhere</a>
      //     </div>
      //   </div>
    }
    document.getElementById("test").innerHTML = html;

  }
  var start = 0;
  var end = 5;

  display(array, start, end);

  var button = [];

  for (let i = 0; i < Math.ceil(array.length/ 5); i++) {
    button.push(`<li class="page-item"><a class="page-link" id="test" >${i +1}</a></li>`);

  }

  document.getElementById("button").innerHTML = button.join("");




var data1 = document.querySelectorAll(".page-link");



data1.forEach(element => {
  element.addEventListener("click", ()=> {

    let start = parseInt(element.innerHTML) * 5 - 5;
    let end = parseInt(element.innerHTML) * 5;
    display(array, start, end);
  })
});

})