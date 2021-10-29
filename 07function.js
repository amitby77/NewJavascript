// we are findind birth year of below array

let ages = [22, 33, 44, 55, 66, 77]

function Birthyear(arr) {

    let brr = []
    for (i = 0; i < arr.length; i++){
        brr.push(2021 - arr[i])
    }
      return brr 

}
let f= Birthyear(ages)

console.log(f)