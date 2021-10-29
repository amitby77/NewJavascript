let list1 = document.querySelectorAll('li')  // list of web elements all
console.log(list1)

changeColor = document.querySelector('button')
console.log(changeColor)



changeColor.addEventListener('click', () => {

    for (let i = 0; i < list1.length; i++) {

        if (i % 2 !== 0) {

            list1[i].style.color = 'red'     //odd red
        }
        else {
            list1[i].style.color = 'green'  // even green
        }
    }

    //to uppercase all element
    for (let i = 0; i < list1.length; i++) {

        list1[i].textContent = list1[i].textContent.toUpperCase() // it returns one string   list1[i].textContent
    }


})


    // for (let i = 0; i < list1.length; i++) {

    //     //console.log(list1[i].textContent)  //to see all html elements text
    //     //list1[i].style.color = 'purple'

    //     if (i % 2 !== 0) {

    //         list1[i].style.color = 'red'     //odd red
    //     }
    //     else {
    //         list1[i].style.color = 'green'  // even green
    //     }
    // }








