/* 18. Create a variable which has the data of “Mask of Madness”. Change all letter A to letter O. Then
output the new data of the variable. */

c = "Mask of Madness"
a = ""

for (let i = 0; i < c.length; i++){
    if (c[i]== "a"){
        a += "o"
    }
    else {
        a += c[i]
    }
}

console.log(a)