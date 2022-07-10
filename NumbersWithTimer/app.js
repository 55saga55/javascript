console.log("hi");

var count = 0, step = 1;
var counter = setInterval(function() {
    if (count < 500){
        // count += step;
        count++;
        html = "";
  
        html +=  `<span class="number" data-value="500">${count}+</span>`

        document.getElementById("x").innerHTML = html;
    }
    
      
},);

var count = 0, step = 1;
var counter = setInterval(function () {
    if (count < 17140){
     
        count++;
        html = "";
  
        html +=  `<span class="number" id="x1" data-value="17140">${count}+</span>`

        document.getElementById("x1").innerHTML = html;
    } 
 
},);

var count = 0, step = 1;
var counter = setInterval(function () {
    if (count < 1500){
        // count += step;
        count++;
        html = "";
  
        html +=  `<span class="number" data-value="500">${count}+</span>`

        document.getElementById("x2").innerHTML = html;
    } 
},);


