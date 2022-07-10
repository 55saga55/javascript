const a = "//https://randomuser.me/api?results=50";




  myuserList = [];

  fetch("https://randomuser.me/api?results=50")
    .then(function (value) {
      return value.json();

    }).then(function (value) {

      myuserList = value;

      var fill = value.results.map(function (value) {
        return `
          <li>
          <img
         src= "${value.picture.medium}" 
          alt="Wells"
        /> <!--Lagre Image-->
    <div class="user-info">
          <h4>${value.name.first} ${value.name.last}</h4>
          <p>${value.location.city} ${value.location.country}</p>
    </div>
  </li>
        
      </div>`
      })
      document.getElementById("result").innerHTML = fill.join("");
    });

function display(fill){

  var fill_1 = fill.map(function(value){
    return  `<li>
    <img src= "${value.picture.medium}" 
    alt="Wells"
  /> <!--Lagre Image-->
<div class="user-info">
    <h4>${value.name.first} ${value.name.last}</h4>
    <p>${value.location.city} ${value.location.country}</p>
</div>
</li>`
  });
  document.getElementById("result").innerHTML = fill_1.join("");
}

// display(fill);

function test() {


  const myFilterData = myuserList.results.filter(function (value) {
    if (value.name.first == document.getElementById("filter").value || value.name.last == document.getElementById("filter").value || value.location.city == document.getElementById("filter").value || value.location.country == document.getElementById("filter").value ) {
      return true;
    }
    else{
      return false;
    }

  });


  display(myFilterData);
}

console.log("hi");