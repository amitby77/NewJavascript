// let listA = document.querySelector('li')     // it will give one element only 
// console.log(listA)

//let listB = document.querySelectorAll('li')    // we get All node list (all element)
// console.log(listB)

//let arr = Array.from(listB)    // to convert node list to array
// console.log(arr)


// Array.from(listB).forEach(function (ele,index) {
// if (index % 2 == 0)

//     ele.style.color='purple'
//     else 
//     ele.style.color='orange'

// })

let ol = document.querySelector('ol')

let ListA = document.querySelectorAll('li')
console.log(ListA[0])
console.log(ListA[1])
console.log(ListA[2])
console.log(ListA[3])

let button = document.querySelector('#addButton')
let input = document.querySelector('input')



Array.from(ListA).forEach (function(el){
    
    CreateButton(el)


})
    


button.addEventListener('click', function () {                     //to click on add button

    let newElement = document.createElement('li')
    newElement.textContent = input.value                   // to get input from the new text window
    CreateButton(newElement)                       
    ol.appendChild(newElement)                             // to add child element to the parent element ol

})







function CreateButton(li) {
    let RemoveButton = document.createElement('button')
    RemoveButton.textContent = ' Remove'
    RemoveButton.classList = 'remove'
    li.appendChild(RemoveButton)

    let UpButton = document.createElement('button')
    UpButton.textContent = 'Up'
    UpButton.classList = 'up'
    li.appendChild(UpButton)

    let DownButton = document.createElement('button')
    DownButton.textContent = 'Down'
    DownButton.classList = 'down'
    li.appendChild(DownButton)



}


