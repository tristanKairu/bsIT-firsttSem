/* 27. Create an array composing of integers of 1 to 5. Create a second array composing of 2, 4, and 5.
Using for-loop, output the integers of the first array that are not present in the second array. */

a = [1,2,3,4,5]
b = [2,4,5]

for (let i = 0; i < a.length; i++){
    let duplicate = false
    for (let j = 0; j < b.length; j++){
        if(a[i] == b[j]){
            duplicate = true
        }
    }
    if (duplicate == false){
        console.log(a[i])
    }
}