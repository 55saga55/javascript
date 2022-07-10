myProducts= [];

const displayProduct = (myProducts,isload)=>{
     var prod = myProducts.map(function(value){
       return `<div class= "s2">
       <div class="card" style="width: 18rem;">
       <img class="card-img-top" src=${value.image} alt="Card image cap">
       <div class="card-body">
           <h5 class="card-title">${value.title}</h5>
           <h5 class="card-title">${value.price}</h5>
           <h5 class="card-title">${value.category}</h5>
       </div>
     </div>
     </div>
       `
     })
     document.getElementById("product").innerHTML = prod.join(" ");

     if(isload)
     {
 
     const btn = myProducts.map((value) => {
         return `<div class="row1"><input type="checkbox" class="inputcheck" value="${value.category}" id="${value.category}" onclick="filter_info(event)"><button class="company-btn">${value.category}</button></div>`
      
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
        displayProduct(x,true);
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

    if(array.length == 0) {

      display();
    }
else{
    var myfilterData = myProducts.filter((value)=> {

      return array.includes(value.category)
    });

displayProduct(myfilterData);
  }

}


