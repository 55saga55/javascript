

var myproduct = []
    fetch("https://fakestoreapi.com/products")
    .then((value)=>value.json())
    .then(
       
    //    value=> console.log(value)
        (value)=> displaytab(value)
       )
    
function displaytab(value){
   
    myproduct= value;
    var html = `<thead>
    <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">category</th>
        <th scope="col">deleteProduct</th> 
    </tr>
</thead>`
    for(let i=0 ; i < value.length ; i++){
    html += `
<tbody>
    <tr>
        <td>${value[i].id}</td>
        <td>${value[i].title}</td>
        <td>${value[i].price}</td>
        <td>${value[i].category}</td>
       <td> <button type="button" class="btn btn-outline-danger" id="${value[i].id}" onclick="deleteProduct(event);(event);">Delete</button></td>
     
    </tr>
</tbody>`

    }
    document.getElementById("table").innerHTML = html;
}


document.getElementsByClassName("btn").id

function deleteProduct(ev){
    const id1 = ev.target.id;
    // console.log(id1);
    const url = "https://fakestoreapi.com/products/" + id1;
 fetch(url,{
            method:"DELETE",
            body:JSON.stringify(ev)
        })
            .then(res=>res.json())
            .then(
                function(ev) {
                
                    if (confirm("Are u sure you want to delete item..")) {
                      console.log(`You deleted item ${id1}`); 
                    } else {
                      console.log("You press cancled button");
                    }
                    
                  }
            )
    }



