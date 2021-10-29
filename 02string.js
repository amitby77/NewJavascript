let namee= 'amit'
console.log(namee[0])
console.log(namee)
console.log(namee.length)      // to find length of string

console.log(namee[namee.length-1])  // to print element of last index
console.log(typeof namee)   // type of data type

let upp = namee.toUpperCase()  // to make all string element uppercase 
console.log(upp)

let name2 = 'AMIT MALLESHAPPA BYALE'

console.log(name2.toLowerCase())   // to covert in small letters

console.log(name2.slice(12,16))
console.log(name2.slice(17,name2.length))

for (let i=0; i<name2.length; i++){

    console.log(name2[i])   // print all latters on by one

}
 console.log('**************************')


 let count=0   /// calculate count of alphabet a in above string

 for (let i=0;i<name2.length;i++){

        if (name2[i]=='A'){

            count= count+1
        }

 }
  console.log('The COunt of alphabate A in above string is '+ (count))



  console.log('=============================')

  // to no of vowels 
  let vowels = 0

  for (let i=0; i<name2.length;i++){

    if(name2[i]=='A' || name2[i]=='E' || name2[i]=='I' || name2[i]=='O' || name2[i]=='U' ){

        vowels = vowels +1


    }
  }
  console.log(vowels)

  // REVERSE STRING

  let reverse= ""
  for (let i=name2.length-1 ; i>=0 ;i--){
    //   console.log(name2[i])
    reverse= reverse + name2[i]
  }

  console.log(reverse)


  ////////////


  let name3 = "amit here i live in solapur"
  let new1 =  name3[0].toUpperCase() + name3.slice(1,name3.length)

console.log(new1)