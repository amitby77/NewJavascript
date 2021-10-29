//includes

let userFruit= 'Orange'.toLowerCase()
let fruits= 'mango banana apple kiwi orange'

if(fruits.includes(userFruit)){

    console.log(`${userFruit} is available`)
}
else {
    console.log(`${userFruit} is not available`)
}


//trimm it remove forward and footer space in the string

let person=' Amit Byale '
console.log(person)
console.log(person.length)

let Trimperson= person.trim()
console.log(person)
console.log(Trimperson.length)


//trimright and trimleft

let flower = ' jaswanda '
//let aa= flower.trimRight()
let aa= flower.trimLeft()
console.log(aa)
console.log(aa.length)

//how to  remove middle space

let name1= ' ashish byale '
let kk= name1.trim().split(' ').join('')     //split with space gives you array   // spli with no space give you seperate letters array
console.log(kk)                               //.join('') = joint two element and returns a string value





//replace method of  string can replace the perticular words in the array

let learn= ' Myself Amit and i am learning Cypress'  // if you want to replace the word cypress to javascript

let change= learn.replace('Cypress','Python')
console.log(change)

// replace all

console.log('*****************************')

let my= 'i love javascript i write code in javascript i learned array and string methods in javascript'
let my1= my.split(' ')

for(let i=0; i<my1.length;i++){
    if(my1[i]==='javascript'){

        my1[i]= 'java'
    }

  
}

console.log(my1.join(' '))



