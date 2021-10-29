//JavaScript arrays are used to store multiple values in a single variable.


const fruits= ['apple','banana','orange']
console.log(fruits)
fruits[0]= 'chikoo'
console.log(fruits)
fruits[1]= 'gauva'
console.log(fruits)
delete fruits[0]
console.log(fruits)

fruits.splice(0,1,'apple','kiwi')
console.log(fruits)

fruits.push('pinaple')
console.log(fruits)

fruits.push('add');
console.log(fruits);

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('apple')
console.log(fruits)


console.log('***********************************')




console.log('hello')


function add(x,y){

    console.log(x+y)
    console.log(`sub is ${x-y}` )

}
add (55,15)

add(115,85)


setTimeout(function(){
        
    console.log('i am function add')   // we can set timer for result miliseconds


},2000)



let namee = ['amit','samarth','kumar','akshay']

console.log(namee.join(' '))   // to covert array to string

let string1= 'my name is amit i love india'
console.log(string1)

console.log(string1.split(' '))
let split1= string1.split(' ')



console.log(split1[3])


