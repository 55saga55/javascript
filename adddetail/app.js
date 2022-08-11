console.log("hi");



function add_fields() {
  var data = document.getElementById("exe");

  data.innerHTML += abc();
}

function abc() {
  return `<div id="test"> 
    <div id="main">
    <h2>Education</h2>
    <input type="text" placeholder="UniversityName" id="uni" class="uni"></input>
    <select name="education" id="education">
        <option value="ME">M.E</option>
        <option value="BE">B.E</option>
        <option value="HSC">H.S.C</option>
        <option value="SSC">S.S.C</option>
      </select>
      <button onclick="remove(event)">remove detail</button>
      <button onclick="save(event)" type="button" >save detail</button>
      </div>
      </div>`
}

function save(event) {
   var uniname = event.target;
  //  console.log(abc);
  var uniname = document.getElementById("uni").value;
  var data = {universityname : uniname}
  console.log(uniname);
  localStorage.setItem("university" , JSON.stringify(data));
}



function remove(event) {
  let node = event.target;
  let abc = document.getElementById("main")
  node.parentNode.parentNode.removeChild(node.parentNode);
  console.log(abc);
}
