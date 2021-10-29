let headingOne = document.querySelector('h1')
let button= document.querySelector('button')
let inputText= document.querySelector('input')
console.log(headingOne)
console.log(button)
console.log(inputText)


headingOne.textContent = 'Heading'
headingOne.style.color= 'purple'
//headingOne.style.backgroundColor= 'orange'


//let human={

   // age:24,
//name1:'Amit',
  //  languageKnown: ['marathi','kannada']
////}
///console.log(human)

button.addEventListener('click', ()=>{

    headingOne.style.color = inputText.value
})