

//   {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }
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
       <td> <button type="button" class="btn btn-outline-danger" id="${value[i].id}" onclick="deleteProduct(value)">Delete</button></td>
     
    </tr>
</tbody>`

    }
    document.getElementById("table").innerHTML = html;
}


document.getElementsByClassName("btn").id

function deleteProduct(value){
    for(let i = 0 ; i <myproduct.length; i++){
    console.log(myproduct.length);
    const id = document.getElementsByTagName("button")[i].id
    console.log(id);
    const url = "https://fakestoreapi.com/products/" + id;
 fetch(url,{
            method:"DELETE",
            body:JSON.stringify(value)
        })
            .then(res=>res.json())
            .then(value=>console.log(value))
    }
}





// function abc(){

//   const app = [{
//         id : 2,
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.cc',
//         category: 'electronic',
//         password: '123@spatel'
//     }]
// fetch('https://fakestoreapi.com/products/1',{
//             method:"DELETE",
//             body:JSON.stringify(app)
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//     }