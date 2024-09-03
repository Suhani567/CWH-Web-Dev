// let obj={
//     a:1,
//     b:'harry'
// }
// console.log(obj)

// let animal={
//     eats: true
// };

// let rabbit={
//     jumbs: true
// };
// rabbit.__proto__=animal; //set rabbit.[[prototype]]=animal

//rabbit
//{jumbs: true}
//rabbit.eats
//true

class Animal{
    constructor(name){
        this.name= name
        console.log("object is creaated")
    }
    eats(){
        
        console.log("kha raha hoon roar")//over ride when 
    }
    jumps(){
        console.log("kud raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name= name
        console.log("Object is created and he is a lion.....")
    }
    eats(){
        super.eats()
        console.log("kha rha huuu bhaii!!")
    }
}
let a= new Animal("bunny");
console.log(a)

let l= new Lion("shera");
console.log(l)

// method overriding
// compare when a.eats is called  and l.eats


//static method 

//getter setter
// class Person{
//     get(name){
//         return this._name;
//     }
//     set name(newName){
//         this._name=newName;
//     }
// }
