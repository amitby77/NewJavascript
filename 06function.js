//function declaration

function add(a, b) {
    console.log(a + b)
}
add(5, 7)


//function expression

let add1 = function (x, y) {

    return x + y;
}
let feAdd = add1(3, 4)
console.log(feAdd)

//Arrow Function

let mul = (a, b) => {

    return a * b
}

let mul1 = mul(2, 4)
console.log(mul1)

//in function declaration we can call the function above tha function

sub(55, 5)

function sub(x, y) {
    console.log(x - y)
}


// let addition= a(4,6)  //Cannot access 'a' before initialization    we can't call function before initialization in function expression

let a = function (x, y) {

    return x + y
}
let addition = a(4, 6)
console.log(addition)


// let b1= b(55,9) // Cannot access 'b' before initialization, we can't call function before initialization in  Arrow Function
// console.log(b1)
let b = (x, y) => {

    return x + y
}
let b1 = b(55, 9)
console.log(b1)

let h = [() => console.log('hello Amit'), 'Hello']   // funxtion in array


h[0]()
console.log(h[1])


let g = {

    age: 22,
    h: () => console.log('hello')
}
console.log(g.h)
g.age = 29
console.log(g.age)

console.log(g)



let x = 20
console.log(x)


let k = function () {
    console.log('india')

}
k()
console.log(k)






let add3 = function (x, y) {
    return x + y
}
// let l =add3(3,6)
// console.log(l)
console.log(add3)


let hh = function (x, y) {
    return x * y
}
// let kk = hh(45,5)
// console.log(kk)

rr=
     hh(12, 13)
    



console.log(rr)



// function array as parameter and return type is also array 
let d= [1,2,3,4,5,6]   // add 2 in that array

//3,4,5,6,7,8
 function addTwo(arr){
     //1,2,3,4,5,6

    for (let i=0;i<arr.length;i++){

        arr[i] = arr[i]+2
    }
    return arr
 }
 let bb= addTwo(d)
 console.log(bb)

// find age

 let birthyear= [2001,2000,2012,2004,2011]         //[20,21,9,17,10]


 function studentAge(ar){
for (let i=0;i<ar.length;i++){
    ar[i] = 2021- ar[i]
}

return ar

 }
 let age1= studentAge(birthyear)
 console.log(age1)



 //passing object as a parameter to another function

 let am={         // am is an object we want to pass this in an function
     fistNAme: 'Amit',
     agee: 29,
     language: 'marathi'
 }

 function updateObj(obj){

    obj.fistNAme='Kiran'
    obj.language='kannada'
    console.log(obj.fistNAme)
    console.log(obj.language)


 }
 
 updateObj(am)
 console.log(am.fistNAme,am.language,am.agee)



 function updateOb(obj){

    obj.fistNAme='Vihaan'
 return obj
 }

 let bb3= updateOb(am)

 console.log(bb3.fistNAme)
 console.log(bb3.agee)
