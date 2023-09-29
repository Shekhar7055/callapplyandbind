// Three methods ---> 1. Call, 2. Apply and Bind

//1. call


let person ={
    name: "Shekhar Singh Thapa",
    city: "Pithoragarh"

}
//globally
let printDetails = function(age, state){
    console.log(`I am ${this.name} and my city is ${this.city} age is ${age} state is ${state}`)
}

let person1 = {
    name : "Uttarakhand",
    city : "2000"

    // printDetails : function(){
    //     console.log(`I am from ${this.state} and my district is ${this.district}`)
    // }
}

// console.log(person)
// console.log(person1)

// person.printDetails();
// person1.printDetails();

printDetails.call(person)
printDetails.call(person1,25,"UK")

//Apply
printDetails.apply(person1,[25,"UK"])

