/* 11. Create an array composing of two elements and its value are “Hello” and “World” respectively. Then
output each letter */

var a = ["Hello", "World"]

for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}