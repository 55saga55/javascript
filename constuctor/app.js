// console.log("hi");



const array = [];

function display(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        ((response) => response.json()))
    .then( (data)=>{
       
        for( key in data){
            const item = new User(data[key].name, data[key].username, data[key].email);
            array.push(item);
        }
    }
    )
    }
console.log(array);

display();


function User(name,username,email){

    this.name= name;
    this.username= username;
    this.email= email;
    
 
}

  

   