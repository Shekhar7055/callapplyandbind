// let myObj = {};
// console.log(myObj);// empty object

// let person ={
//     name : "Shekhar",
//     age : 26
// }

// console.log(person);
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("group"));

// function Person(_name,_age){

//         this.name = _name,
//         this.age = _age 

// }
// let p = new Person("Shekhar Singh Thapa",24)
// console.log(p);



// function Person1(_name,_age){

//     this.name = _name,
//     this.age = _age 
//     this.getNameAndAge = function(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }
// let p1 = new Person1("Shekhar Singh Thapa",24)
// p1.getNameAndAge();
// console.log(p1);

//DRY rule ----> Do not repeat yourself ---->do not repeat your code

function Person2(_name,_age){

    this.name = _name,
    this.age = _age 
}
Person2.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let p2 = new Person2("Shekhar Singh Thapa",24)
let p3 = new Person2("Kamlesh Bafila",24)

p2.getNameAndAge()
p3.getNameAndAge()
console.log(p2);
console.log(p3);

