// let objectA = {

//     'age': 29,                  // object
//     'rollNum': 11
// }

// console.log('************Bracket Notaion******************')
// //Bracket Notaion
// console.log(objectA['age'])
// console.log(objectA['rollNum'])


// console.log('************Dot notation******************')
// //Dot notation

// console.log(objectA.age)
// console.log(objectA.rollNum)


// // properties and method
// // human property = name,age,color
// // human methods= eat(), walk() , talk()


// // Function inside Object method


// //Function Declaration


// function add() {

//     console.log(8 + 9)
// }
// add()

// // function expression

// let sub = function (x, y) {

//     console.log(x - y)

// }
// sub(76, 4)

// //Arrow function

// let add1 = () => {
//     console.log(8 + 4)
// }
// add1()


//****************/


let amit = {
    'fullname': 'Amit Byale',
    'age': 30,
    'talk':function () {

        console.log('hello ' + this.fullname)

    }



}
let akshay = {
    'fullname': 'Akshay Bawdhankar',
    'age': 27,
    'talk':function(){
        console.log('hello '+ this.fullname);
    }
}

console.log(akshay.fullname);
amit.talk()
akshay.talk()

console.log(akshay.age)




