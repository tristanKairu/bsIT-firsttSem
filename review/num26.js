/* 26. Create an array composing of two elements and its value are “Hello” and “World” respectively.
Create an empty string variable then add the elements of the array to the empty variable using for-loop. */

x = ["Hello", " World"]
blank = ""

for (i = 0; i < x.length; i++){
    for (let j = 0; j < x[i].length; j++){
        blank = blank + x [i][j]
    }
}

console.log(blank)