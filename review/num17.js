/* 17. Create a variable which has the data of “Eutopia”. Output each letter except the consonants using
for-loop. */

a = "Eutopia"

for (let i = 0; i < a.length; i++){
    if (a[i]== "a" || a[i]== "e" || a[i]== "i" || a[i]== "o" || a[i]== "u"){
    console.log(a[i])
}
}
