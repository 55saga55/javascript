myProducts = [];

const displayProduct = (myProducts, isload) => {
  var prod = myProducts.map(function (value) {

    return `<div class="card s3" style="width: 18rem; margin-top:100px" id="test1">
      <img class="card-img-top" src=${value.image}  alt="Card image cap">
       <div class="card-body">
           <h5 class="card-title">${value.title}</h5>
           <h5 class="card-title">${value.price}</h5>
           <h5 class="card-title">${value.category}</h5>

           <div class="s4" id="test2">
       <div class="s5">
           <h5 class="card-title">${value.description}</h5>
           <h5 class="card-title">${value.rating.rate}</h5>
           <h5 class="card-title">${value.rating.count}</h5>
       </div>
       </div>
       </div>
       
   </div>`

  })

  document.getElementById("product").innerHTML = prod.join(" ");

  if (isload) {

    const btn = myProducts.map((value) => {
      return `<div class=" d-flex"><input type="checkbox" class="inputcheck" value="${value.category}" id="${value.category}" onclick="filter_info(event)"><label class="mx-3">${value.category}</label></div>`

    });

    const filt_btn = [...new Set(btn)];
    document.getElementById("categories").innerHTML = filt_btn.join(" ");
  }
}

const display = () => {

  fetch('https://fakestoreapi.com/products')
    .then(x => x.json())
    .then(x => {
      myProducts = x;
      displayProduct(x, true);
    })
}

display();



const showDetail = (e) => {
  console.log(e.target);
}

function filter_info(e) {
  var array = []
  var ty = document.querySelectorAll('.inputcheck:checked');

  console.log(ty);

  for (var i = 0; i < ty.length; i++) {
    array.push(ty[i].value)
  }

  if (array.length == 0) {

    display();
  }
  else {
    var myfilterData = myProducts.filter((value) => {

      return array.includes(value.category)
    });

    displayProduct(myfilterData);
  }

}


