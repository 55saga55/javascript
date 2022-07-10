// console.log("hi");

// var startDate = new Date().getTime(); // YYYY (M-1) D H m s ms (start time and date from DB)

// // var newDate = new Date();
// // var newStamp = newDate.getTime();

// var timer = setInterval(function() {

//    var newDate = new Date().getTime();

//     var distance = startDate-newDate;
//     // var days = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
//     // diff = diff-(days*24*60*60);
//     // var hours = Math.floor(diff/(60*60));
//     // diff = diff-(hours*60*60);
//     // var minutes = Math.floor(diff/(60));
//     // diff = diff-(minutes*60);
//     // var seconds = diff;
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     document.getElementById("day").innerHTML = days;
//     document.getElementById("hour").innerHTML = hours;
//     document.getElementById("min").innerHTML = minutes;
//     document.getElementById("sec").innerHTML = seconds;

//     if (distance < 0) {
//      clearInterval(timer);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// },1000)

// // timer = setInterval(updateClock, 1000);


var countDownDate = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("day").innerHTML = days ;
  document.getElementById("hour").innerHTML =  hours ;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("demo").innerHTML = `<h1>EXPIRED</h1>`;
    clearInterval(x);
    
  }
}, 1000);
