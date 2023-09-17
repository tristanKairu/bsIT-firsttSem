/* 16. Create a variable which has the data of “Philippines”. Output each letter 
except the vowels using forloop. */

a = "Philippines"

for (let i = 0; i < a.length; i++){
    if (a[i]!= "a" && a[i]!= "e" && a[i]!= "i" && a[i]!= "o" && a[i]!= "u"){
    console.log(a[i])
}
}

